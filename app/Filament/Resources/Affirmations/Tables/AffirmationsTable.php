<?php

namespace App\Filament\Resources\Affirmations\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AffirmationsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('type')
                    ->label('Категория')
                    ->searchable(),
                TextColumn::make('quote')
                    ->label('Аффирмация')
                    ->limit(55)
                    ->searchable(),
                TextColumn::make('updated_at')
                    ->date()
                    ->label('Дата изменения')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->modalHeading('Удалить выбранные аффирмации'),
                ]),
            ]);
    }
}
