<?php

namespace App\Filament\Resources\PracticeItems\Schemas;

use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Text;
use Filament\Support\Enums\FontWeight;

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
                ]),

                Section::make()
                    ->relationship('image')
                    ->schema([
                        FileUpload::make('path')
                            ->image()
                            ->disk('public')
                            ->label('Изображение')
                            ->maxSize(4128)
                            ->saveUploadedFileUsing(
                                fn($file) =>
                                app(ImageResizer::class)
                                    ->handleImage($file, 700, 'practice')
                            )->dehydrated(fn($state) => filled($state)),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                            ->dehydrated(fn($state) => filled($state)),
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
                    ->addActionLabel('Добавить подпункт')
            ]);
    }
}
