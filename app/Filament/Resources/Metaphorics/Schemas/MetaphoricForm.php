<?php

namespace App\Filament\Resources\Metaphorics\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Text;
use Filament\Support\Enums\FontWeight;

class MetaphoricForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('name')
                        ->label('Название')
                        ->required(),
                    Textarea::make('advice')
                        ->label('Совет')
                        ->required(),
                ]),
                Section::make()
                    ->relationship('frontImage')
                    ->schema([
                        FileUpload::make('path')
                            ->image()
                            ->disk('public')
                            ->label('Изображение')
                            ->maxSize(4128)
                            ->saveUploadedFileUsing(
                                fn($file) =>
                                app(ImageResizer::class)
                                    ->handleImage($file, 600, 'metaphoric')
                            ),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                    ]),

                Section::make()->schema([
                    RichEditor::make('html')
                        ->fileAttachments(false)
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Трактование')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->required()

                ])->columnSpanFull(),

            ]);
    }
}
