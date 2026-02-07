<?php

namespace App\Filament\Resources\Tarots\Schemas;

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

class TarotForm
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
                                fn (UploadedFile $file) => resolve(ImageResizer::class)
                                    ->handleImage($file, 300, 'tarot')
                            )->dehydrated(fn ($state): bool => filled($state)),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                            ->dehydrated(fn ($state): bool => filled($state)),
                    ]),

                Section::make()->schema([
                    RichEditor::make('html')
                        ->fileAttachments(false)
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Трактование')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->required(),

                ])->columnSpanFull(),

            ]);
    }
}
