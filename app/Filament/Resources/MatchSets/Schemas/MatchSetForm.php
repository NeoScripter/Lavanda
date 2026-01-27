<?php

namespace App\Filament\Resources\MatchSets\Schemas;

use App\Enums\MatchSetType;
use App\Models\Lenormand;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Text;
use Filament\Support\Enums\FontWeight;
use Filament\Schemas\Components\Utilities\Get;

class MatchSetForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    Select::make('type')
                        ->options(
                            collect(MatchSetType::cases())
                                ->mapWithKeys(fn($type) => [$type->value => $type->getLabel()])
                                ->toArray()
                        )
                        ->reactive()
                        ->required()
                        ->maxWidth('xs'),
                    Select::make('ids')
                        ->label('Элементы в комбинации')
                        ->multiple()
                        ->searchable()
                        ->required()
                        ->options(fn(Get $get) => match ($get('type')) {
                            MatchSetType::LENORMAND->value =>
                            \App\Models\Lenormand::query()
                                ->orderBy('id')
                                ->pluck('name', 'id'),

                            MatchSetType::RUNE->value =>
                            \App\Models\Lenormand::query()
                                ->orderBy('id')
                                ->pluck('name', 'id'),

                            default => [],
                        }),
                    Textarea::make('advice')
                        ->label('Совет')
                        ->required()
                        ->columnSpanFull(),
                ]),
                Section::make()->schema([
                    RichEditor::make('html')
                        ->fileAttachments(false)
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Трактование')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->required()

                ])->columnSpanFull(),


            ]);
    }
}
