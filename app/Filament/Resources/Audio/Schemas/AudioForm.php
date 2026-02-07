<?php

namespace App\Filament\Resources\Audio\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AudioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    Textarea::make('intro')
                        ->label('Описание')
                        ->trim()
                        ->required()
                        ->columnSpanFull(),
                    FileUpload::make('path')
                        ->acceptedFileTypes([
                            'x-world/x-3dmf',
                            'application/vnd.sketchup.skp',
                            'audio/mpeg',
                        ])
                        ->mimeTypeMap([
                            '3dm' => 'x-world/x-3dmf',
                            'skp' => 'application/vnd.sketchup.skp',
                            'mp3' => 'audio/mpeg',
                        ])
                        ->disk('public')
                        ->maxSize(4128)
                        ->label('Аудио')
                        ->required()
                        ->dehydrated(fn($state): bool => filled($state))
                ]),
            ]);
    }
}
