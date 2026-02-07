<?php

namespace App\Filament\Resources\PracticeItems\Schemas;

use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;
use Illuminate\Http\UploadedFile;

class PracticeItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('title')
                        ->label('Заголовок')
                        ->required(),
                    Textarea::make('description')
                        ->label('Описание')
                        ->required(),
                    Textarea::make('heading')
                        ->label('Заголовок списка')
                        ->required(),
                    Textarea::make('body')
                        ->label('Подзаголовок списка')
                        ->required(),
                    FileUpload::make('file')
                        ->disk('public')
                        ->directory('wellness')
                        ->label('Файл')
                        ->maxSize(8128)
                        ->dehydrated(fn ($state): bool => filled($state)),
                ]),

                Section::make()
                    ->relationship('image')
                    ->schema([
                        FileUpload::make('path')
                            ->image()
                            ->disk('public')
                            ->label('Изображение')
                            ->required()
                            ->maxSize(4128)
                            ->saveUploadedFileUsing(
                                fn (UploadedFile $file) => resolve(ImageResizer::class)
                                    ->handleImage($file, 700, 'practice')
                            )->dehydrated(fn ($state): bool => filled($state)),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                            ->dehydrated(fn ($state): bool => filled($state)),
                    ]),

                Repeater::make('faqs')
                    ->hiddenLabel()
                    ->aboveContent(Text::make('Подпункты')
                        ->size('lg')
                        ->weight(FontWeight::Bold))
                    ->relationship()
                    ->schema([
                        TextInput::make('question')
                            ->required()
                            ->label('Вопрос'),
                        Textarea::make('answer')
                            ->required()
                            ->label('Ответ'),
                    ])
                    ->grid(2)
                    ->columnSpanFull()
                    ->itemLabel('Подпункт')
                    ->itemNumbers()
                    ->addActionLabel('Добавить подпункт'),
            ]);
    }
}
