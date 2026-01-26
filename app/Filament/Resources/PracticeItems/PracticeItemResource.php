<?php

namespace App\Filament\Resources\PracticeItems;

use App\Filament\Resources\PracticeItems\Pages\CreatePracticeItem;
use App\Filament\Resources\PracticeItems\Pages\EditPracticeItem;
use App\Filament\Resources\PracticeItems\Pages\ListPracticeItems;
use App\Filament\Resources\PracticeItems\Pages\ViewPracticeItem;
use App\Filament\Resources\PracticeItems\Schemas\PracticeItemForm;
use App\Filament\Resources\PracticeItems\Schemas\PracticeItemInfolist;
use App\Filament\Resources\PracticeItems\Tables\PracticeItemsTable;
use App\Models\PracticeItem;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PracticeItemResource extends Resource
{
    protected static ?string $model = PracticeItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedQrCode;

    protected static ?string $recordTitleAttribute = 'PracticeItem';
    protected static ?string $modelLabel = 'Практика';
    protected static ?string $pluralModelLabel = 'Практики';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return PracticeItemForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return PracticeItemInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PracticeItemsTable::configure($table);
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
            'index' => ListPracticeItems::route('/'),
            'create' => CreatePracticeItem::route('/create'),
            'view' => ViewPracticeItem::route('/{record}'),
            'edit' => EditPracticeItem::route('/{record}/edit'),
        ];
    }
}
