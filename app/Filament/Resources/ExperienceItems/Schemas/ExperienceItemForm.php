<?php

namespace App\Filament\Resources\ExperienceItems\Schemas;

use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;
use Illuminate\Http\UploadedFile;

class ExperienceItemForm
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
                                fn (UploadedFile $file) => resolve(ImageResizer::class)
                                    ->handleImage($file, 700, 'experience')
                            ),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото'),
                    ]),

                Section::make()->schema([
                    RichEditor::make('html')
                        ->fileAttachments(false)
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Содержание')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->required(),

                ])->columnSpanFull(),
            ]);
    }
}
