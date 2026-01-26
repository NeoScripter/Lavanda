<?php

namespace App\Filament\Resources\WellnessTips\Schemas;

use App\Enums\WellnessTipType;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class WellnessTipInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextEntry::make('type')
                        ->formatStateUsing(fn(WellnessTipType $state): string => $state->getLabel())
                        ->label('Раздел')
                        ->badge(),
                    TextEntry::make('description')
                        ->label('Содержание'),
                    TextEntry::make('url')
                        ->label('Ссылка'),
                    ImageEntry::make('image.path')
                        ->imageWidth(300)
                        ->imageHeight(200)
                        ->label('Изображение')
                ]),
            ]);
    }
}
