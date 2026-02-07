<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Enums\SubscriptionStatus;
use App\Enums\UserGender;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class UserInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextEntry::make('name')
                        ->inlineLabel()
                        ->label('Имя'),
                    TextEntry::make('email')
                        ->inlineLabel()
                        ->label('Email'),
                    TextEntry::make('gender')
                        ->label('Пол')
                        ->inlineLabel()
                        ->formatStateUsing(
                            fn(?string $state): string =>
                            UserGender::label(UserGender::tryFrom($state))
                        )
                        ->placeholder('не указан'),
                    TextEntry::make('birthday')
                        ->label('День рождения')
                        ->inlineLabel()
                        ->date()
                        ->placeholder('не указан'),
                    TextEntry::make('updated_at')
                        ->inlineLabel()
                        ->date()
                        ->label('Дата изменения')
                        ->placeholder('-'),
                ])->columns(1),

                Section::make()->relationship('subscription')
                    ->schema([
                        TextEntry::make('title')
                            ->inlineLabel()
                            ->label('Тариф'),
                        TextEntry::make('ends_at')
                            ->label('Действует до')
                            ->inlineLabel()
                            ->date(),
                        TextEntry::make('status')
                            ->label('Автопродление')
                            ->formatStateUsing(
                                fn(SubscriptionStatus $state): string =>
                                $state === SubscriptionStatus::CANCELLED ? 'Выключено' : 'Включено'
                            )
                            ->inlineLabel(),
                    ])->columns(1),

            ]);
    }
}
