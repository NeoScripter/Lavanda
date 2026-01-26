<?php

namespace App\Filament\Resources\WellnessTips;

use App\Filament\Resources\WellnessTips\Pages\CreateWellnessTip;
use App\Filament\Resources\WellnessTips\Pages\EditWellnessTip;
use App\Filament\Resources\WellnessTips\Pages\ListWellnessTips;
use App\Filament\Resources\WellnessTips\Pages\ViewWellnessTip;
use App\Filament\Resources\WellnessTips\Schemas\WellnessTipForm;
use App\Filament\Resources\WellnessTips\Schemas\WellnessTipInfolist;
use App\Filament\Resources\WellnessTips\Tables\WellnessTipsTable;
use App\Models\WellnessTip;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class WellnessTipResource extends Resource
{
    protected static ?string $model = WellnessTip::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedNewspaper;

    protected static ?string $recordTitleAttribute = 'WellnessTip';

    protected static ?string $modelLabel = 'Полезный ресурс';
    protected static ?string $pluralModelLabel = 'Полезные ресурсы';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return WellnessTipForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return WellnessTipInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return WellnessTipsTable::configure($table);
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
            'index' => ListWellnessTips::route('/'),
            'create' => CreateWellnessTip::route('/create'),
            'view' => ViewWellnessTip::route('/{record}'),
            'edit' => EditWellnessTip::route('/{record}/edit'),
        ];
    }
}
