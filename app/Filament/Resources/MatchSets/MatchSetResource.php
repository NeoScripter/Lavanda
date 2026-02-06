<?php

namespace App\Filament\Resources\MatchSets;

use App\Filament\Resources\MatchSets\Pages\CreateMatchSet;
use App\Filament\Resources\MatchSets\Pages\EditMatchSet;
use App\Filament\Resources\MatchSets\Pages\ListMatchSets;
use App\Filament\Resources\MatchSets\Schemas\MatchSetForm;
use App\Filament\Resources\MatchSets\Tables\MatchSetsTable;
use App\Models\MatchSet;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class MatchSetResource extends Resource
{
    protected static ?string $model = MatchSet::class;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::Combine;

    protected static ?string $modelLabel = 'Комбинация карт';
    protected static ?string $pluralModelLabel = 'Комбинации карт';
    protected static bool $hasTitleCaseModelLabel = false;


    public static function form(Schema $schema): Schema
    {
        return MatchSetForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MatchSetsTable::configure($table);
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
            'index' => ListMatchSets::route('/'),
            'create' => CreateMatchSet::route('/create'),
            'edit' => EditMatchSet::route('/{record}/edit'),
        ];
    }
}
