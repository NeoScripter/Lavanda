<?php

namespace App\Filament\Resources\Affirmations\Schemas;

use App\Models\Affirmation;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AffirmationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('type')
                        ->label('Категория')
                        ->datalist(Affirmation::distinct()->pluck('type')->toArray())
                        ->trim()
                        ->required(),
                    Textarea::make('quote')
                        ->label('Аффирмация')
                        ->required(),
                ]),
            ]);
    }
}
