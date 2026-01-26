<?php

namespace App\Filament\Resources\Plans\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PlanForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('title')
                        ->required()
                        ->label('Название')
                        ->columnSpanFull(),
                    TextInput::make('duration_in_days')
                        ->required()
                        ->numeric()
                        ->label('Длительность')
                        ->suffix(' дней'),
                    TextInput::make('price')
                        ->required()
                        ->numeric()
                        ->prefix('₽')
                        ->label('Цена'),
                ])->columns(2),
            ]);
    }
}
