<?php

namespace App\Filament\Resources\Plans\Schemas;

use App\Enums\PlanTier;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class PlanForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Select::make('tier')
                    ->options(PlanTier::class)
                    ->required(),
                TextInput::make('duration_in_days')
                    ->required()
                    ->numeric(),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('Руб.'),
            ]);
    }
}
