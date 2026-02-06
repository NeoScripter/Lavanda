<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Enums\PlanTitle;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->relationship('subscription')
                    ->schema([
                        Select::make('title')
                            ->options(collect(PlanTitle::cases())->pluck('value', 'value'))
                            ->label('Тариф')
                            ->required(),
                        DateTimePicker::make('ends_at')
                            ->label('Действует до')
                            ->seconds(false)
                            ->inlineLabel(),
                    ])->columns(1)->maxWidth('md'),
            ]);
    }
}
