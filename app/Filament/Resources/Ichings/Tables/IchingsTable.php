<?php

namespace App\Filament\Resources\Ichings\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class IchingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('number', 'asc')
            ->defaultPaginationPageOption(25)
            ->contentGrid([
                'sm' => 3,
                'md' => 5,
                'lg' => 4,
                'xl' => 5,
            ])
            ->columns([
                Stack::make([
                    TextColumn::make('number')
                        ->label('Номер')
                        ->numeric()
                        ->description('Номер', position: 'above')
                        ->searchable(),
                ]),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                // BulkActionGroup::make([
                //     DeleteBulkAction::make(),
                // ]),
            ]);
    }
}
