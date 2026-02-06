<?php

namespace App\Filament\Resources\Legals;

use App\Filament\Resources\Legals\Pages\CreateLegal;
use App\Filament\Resources\Legals\Pages\EditLegal;
use App\Filament\Resources\Legals\Pages\ListLegals;
use App\Filament\Resources\Legals\Pages\ViewLegal;
use App\Filament\Resources\Legals\Schemas\LegalForm;
use App\Filament\Resources\Legals\Schemas\LegalInfolist;
use App\Filament\Resources\Legals\Tables\LegalsTable;
use App\Models\Legal;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class LegalResource extends Resource
{
    protected static ?string $model = Legal::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedScale;
    protected static ?string $modelLabel = 'Документ';
    protected static ?string $pluralModelLabel = 'Документы';

    public static function form(Schema $schema): Schema
    {
        return LegalForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return LegalInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return LegalsTable::configure($table);
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
            'index' => ListLegals::route('/'),
            // 'create' => CreateLegal::route('/create'),
            'view' => ViewLegal::route('/{record}'),
            'edit' => EditLegal::route('/{record}/edit'),
        ];
    }
}
