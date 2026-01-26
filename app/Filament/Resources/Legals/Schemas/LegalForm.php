<?php

namespace App\Filament\Resources\Legals\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Schema;

class LegalForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                RichEditor::make('html')
                    ->fileAttachments(false)
                    ->label('Содержание')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
