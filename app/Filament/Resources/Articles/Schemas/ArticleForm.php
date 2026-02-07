<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ArticleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Название')
                    ->maxWidth('sm')
                    ->required(),
                RichEditor::make('html')
                    ->fileAttachments(false)
                    ->label('Содержание')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
