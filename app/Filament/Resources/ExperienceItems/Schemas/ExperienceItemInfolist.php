<?php

namespace App\Filament\Resources\ExperienceItems\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;

class ExperienceItemInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextEntry::make('title')
                        ->label('Заголовок'),
                    TextEntry::make('description')
                        ->label('Описание')
                        ->columnSpanFull(),
                    TextEntry::make('heading')
                        ->label('Заголовок содержания'),
                ]),
                Section::make()->schema([
                    ImageEntry::make('image.path')
                        ->imageWidth(250)
                        ->imageHeight(250)
                        ->label('Изображение'),
                ]),
                Section::make()
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('html')
                            ->hiddenLabel()
                            ->aboveContent(Text::make('Содержание')
                                ->size('lg')
                                ->weight(FontWeight::Bold))
                            ->placeholder('Здесь пока ничего нет...')
                            ->markdown()
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
