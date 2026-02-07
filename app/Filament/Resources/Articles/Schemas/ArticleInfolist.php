<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;

class ArticleInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->maxWidth('xs')->schema([
                    TextEntry::make('name')
                        ->label('Название')
                ]),
                Section::make()
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('html')
                            ->hiddenLabel()
                            ->aboveContent(Text::make('Содержание')
                                ->size('lg')
                                ->weight(FontWeight::Bold))
                            ->placeholder('Здесь пока ничего нет...')
                            ->markdown()
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
