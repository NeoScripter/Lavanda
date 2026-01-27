<?php

namespace App\Filament\Resources\MindGames\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;

class MindGameForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
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
                                    ->handleImage($file, 600, 'mindgames')
                            )->dehydrated(fn($state) => filled($state)),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                            ->dehydrated(fn($state) => filled($state)),
                    ]),
            ]);
    }
}
