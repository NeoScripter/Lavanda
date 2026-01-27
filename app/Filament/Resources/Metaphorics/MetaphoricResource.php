<?php

namespace App\Filament\Resources\Metaphorics;

use App\Filament\Resources\Metaphorics\Pages\CreateMetaphoric;
use App\Filament\Resources\Metaphorics\Pages\EditMetaphoric;
use App\Filament\Resources\Metaphorics\Pages\ListMetaphorics;
use App\Filament\Resources\Metaphorics\Schemas\MetaphoricForm;
use App\Filament\Resources\Metaphorics\Tables\MetaphoricsTable;
use App\Models\Metaphoric;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class MetaphoricResource extends Resource
{
    protected static ?string $model = Metaphoric::class;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::Sparkles;

    protected static ?string $recordTitleAttribute = 'Metaphoric';
    protected static ?string $modelLabel = 'Метафорическая карта';
    protected static ?string $pluralModelLabel = 'Метафорические карты';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return MetaphoricForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MetaphoricsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMetaphorics::route('/'),
            'create' => CreateMetaphoric::route('/create'),
            'edit' => EditMetaphoric::route('/{record}/edit'),
        ];
    }
}
