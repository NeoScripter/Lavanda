<?php

namespace App\Filament\Resources\Legals\Tables;

use App\Enums\LegalType;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class LegalsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('type')
                    ->formatStateUsing(fn (LegalType $state): string => $state->getLabel())
                    ->label('Название')
                    ->searchable(
                        query: function ($query, string $search): void {
                            $matchingValues = collect(LegalType::cases())
                                ->filter(
                                    fn ($case): bool => str_contains(
                                        mb_strtolower($case->getLabel()),
                                        mb_strtolower($search)
                                    )
                                )
                                ->map(fn ($case) => $case->value)
                                ->all();

                            $query->whereIn('type', $matchingValues);
                        }
                    ),
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
                // BulkActionGroup::make([
                //     DeleteBulkAction::make(),
                // ]),
            ]);
    }
}
