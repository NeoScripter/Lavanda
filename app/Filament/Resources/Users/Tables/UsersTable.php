<?php

namespace App\Filament\Resources\Users\Tables;

use App\Enums\UserGender;
use App\Enums\UserRole;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(
                fn (Builder $query) => $query->where('role', '!=', UserRole::ADMIN)
            )
            ->columns([
                TextColumn::make('name')
                    ->label('Имя')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                TextColumn::make('gender')
                    ->label('Пол')
                    ->placeholder('не указан')
                    ->formatStateUsing(
                        fn (?string $state): string => UserGender::label(UserGender::tryFrom($state))
                    )
                    ->searchable(
                        query: function ($query, string $search): void {
                            $matchingValues = collect(UserGender::cases())
                                ->filter(
                                    fn ($case): bool => str_contains(
                                        mb_strtolower($case->getLabel()),
                                        mb_strtolower($search)
                                    )
                                )
                                ->map(fn ($case) => $case->value)
                                ->all();

                            $query->whereIn('gender', $matchingValues);
                        }
                    ),
                TextColumn::make('birthday')
                    ->label('День рождения')
                    ->placeholder('не указан')
                    ->date()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->date()
                    ->label('Дата изменения')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Filter::make('subs')
                    ->label('Пользователи с подпиской')
                    ->query(
                        fn (Builder $query) => $query->whereHas(
                            'subscription',
                            fn ($q) => $q->where('ends_at', '>', now())
                        )
                    ),
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
