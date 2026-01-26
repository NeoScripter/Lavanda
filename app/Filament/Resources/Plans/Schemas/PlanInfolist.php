<?php

namespace App\Filament\Resources\Plans\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PlanInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextEntry::make('title')->label('Название'),
                    TextEntry::make('duration_in_days')
                        ->numeric()->label('Длительность')->suffix(' дней'),
                    TextEntry::make('price')
                        ->money('rubles', decimalPlaces: 0)->label('Цена'),
                ])->columns(3),
            ]);
    }
}
