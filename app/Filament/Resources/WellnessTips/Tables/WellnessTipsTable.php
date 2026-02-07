<?php

namespace App\Filament\Resources\WellnessTips\Tables;

use App\Enums\WellnessTipType;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class WellnessTipsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('type')
                    ->label('Раздел')
                    ->formatStateUsing(fn(WellnessTipType $state): string => $state->getLabel())
                    ->badge()
                    ->searchable(
                        query: function ($query, string $search): void {
                            $matchingValues = collect(WellnessTipType::cases())
                                ->filter(
                                    fn($case): bool =>
                                    str_contains(
                                        mb_strtolower((string) $case->getLabel()),
                                        mb_strtolower($search)
                                    )
                                )
                                ->map(fn($case) => $case->value)
                                ->all();

                            $query->whereIn('type', $matchingValues);
                        }
                    ),
                TextColumn::make('description')
                    ->label('Содержание')
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
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->modalHeading('Удалить выбранные полезные ресурсы'),
                ]),
            ]);
    }
}
