<?php

namespace App\Filament\Resources\Legals\Schemas;

use App\Enums\LegalType;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;

class LegalInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->maxWidth('xs')->schema([
                    TextEntry::make('type')
                        ->label('Название')
                        ->formatStateUsing(fn (LegalType $state): string => $state
                            ->getLabel()),
                ]),
                Section::make()
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('body')
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
