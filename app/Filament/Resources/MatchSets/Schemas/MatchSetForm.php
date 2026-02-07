<?php

namespace App\Filament\Resources\MatchSets\Schemas;

use App\Enums\MatchSetType;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Text;
use Filament\Support\Enums\FontWeight;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;

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
                                ->mapWithKeys(fn($type): array => [$type->value => $type->getLabel()])
                                ->all()
                        )
                        ->live()
                        ->required()
                        ->maxWidth('xs')->afterStateUpdated(fn(Set $set): mixed => $set('ids', null)),
                    Select::make('ids')
                        ->label('Элементы в комбинации')
                        ->multiple()
                        ->searchable()
                        ->required()
                        ->options(function (Get $get) {
                            $type = $get('type');
                            if (!$type) {
                                return [];
                            }

                            $matchSetType = MatchSetType::from($type);
                            $modelClass = $matchSetType->getModelClass();

                            return $modelClass::query()
                                ->orderBy('id')
                                ->pluck('name', 'id');
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
