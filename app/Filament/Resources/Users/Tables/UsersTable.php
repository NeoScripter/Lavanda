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
                fn(Builder $query) => $query->where('role', '!=', UserRole::ADMIN)
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
                        fn(?string $state): string => UserGender::label(UserGender::tryFrom($state))
                    )
                    ->searchable(
                        query: function ($query, string $search): void {
                            $matchingValues = collect(UserGender::cases())
                                ->filter(
                                    fn($case): bool => str_contains(
                                        mb_strtolower($case->getLabel()),
                                        mb_strtolower($search)
                                    )
                                )
                                ->map(fn($case) => $case->value)
                                ->all();

                            $query->whereIn('gender', $matchingValues);
                        }
                    ),
                TextColumn::make('birthday')
                    ->label('День рождения')
                    ->placeholder('не указан')
                    ->date()
                    ->sortable(),
                TextColumn::make('subscription')
                    ->label('Статус')
                    ->placeholder('нет подписки')
                    ->badge()
                    ->formatStateUsing(function (?string $state, $record): string {
                        if (!$record->subscription) {
                            return 'Нет подписки';
                        }

                        // Check if subscription is active (not expired)
                        $isActive = $record->subscription->ends_at > now();

                        if (!$isActive) {
                            return 'Истекла';
                        }

                        return  'Активна';
                    }),
                TextColumn::make('subscription.ends_at')
                    ->label('Подписка до')
                    ->date()
                    ->placeholder('нет подписки'),
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
                        fn(Builder $query) => $query->whereHas(
                            'subscription',
                            fn($q) => $q->where('ends_at', '>', now())
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

                // Section::make()->relationship('subscription')
                //     ->schema([
                //         TextEntry::make('title')
                //             ->inlineLabel()
                //             ->label('Тариф'),
                //         TextEntry::make('ends_at')
                //             ->label('Действует до')
                //             ->inlineLabel()
                //             ->date(),
                //         TextEntry::make('status')
                //             ->label('Автопродление')
                //             ->formatStateUsing(
                //                 fn (SubscriptionStatus $state): string => $state === SubscriptionStatus::CANCELLED ? 'Выключено' : 'Включено'
                //             )
                //             ->inlineLabel(),
                //     ])->columns(1),
