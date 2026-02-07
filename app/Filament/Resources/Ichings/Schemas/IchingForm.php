<?php

namespace App\Filament\Resources\Ichings\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;

class IchingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    RichEditor::make('description')
                        ->fileAttachments(false)
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Толкование')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->required(),
                ])->columnSpanFull(),
            ]);
    }
}
