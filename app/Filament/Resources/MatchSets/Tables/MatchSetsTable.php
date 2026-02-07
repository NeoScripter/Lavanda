<?php

namespace App\Filament\Resources\MatchSets\Tables;

use App\Enums\MatchSetType;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MatchSetsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->contentGrid([
                'md' => 2,
                'xl' => 3,
            ])
            ->columns([
                Stack::make([
                    TextColumn::make('type')
                        ->label('Раздел')
                        ->formatStateUsing(fn (MatchSetType $state): string => $state->getLabel())
                        ->badge()
                        ->searchable(
                            query: function ($query, string $search): void {
                                $matchingValues = collect(MatchSetType::cases())
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
                    ImageColumn::make('items')
                        ->label('Элементы')
                        ->getStateUsing(function ($record) {
                            if (! $record->type || ! $record->ids) {
                                return [];
                            }

                            $modelClass = $record->type->getModelClass();

                            return $modelClass::query()
                                ->whereIn('id', $record->ids)
                                ->get()
                                ->map(fn ($item) => $item->frontImage?->path)
                                ->filter()
                                ->all();
                        })
                        ->circular()
                        ->stacked()
                        ->limit(4)
                        ->limitedRemainingText()
                        ->imageSize(75)
                        ->ring(2)
                        ->overlap(8),
                    TextColumn::make('updated_at')
                        ->date()
                        ->label('Дата изменения')
                        ->sortable()
                        ->toggleable(isToggledHiddenByDefault: true),
                ])->space(3),
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
                        ->modalHeading('Удалить выбранные комбинации'),
                ]),
            ]);
    }
}
