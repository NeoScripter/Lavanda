<?php

namespace App\Filament\Resources\ExperienceItems;

use App\Filament\Resources\ExperienceItems\Pages\CreateExperienceItem;
use App\Filament\Resources\ExperienceItems\Pages\EditExperienceItem;
use App\Filament\Resources\ExperienceItems\Pages\ListExperienceItems;
use App\Filament\Resources\ExperienceItems\Pages\ViewExperienceItem;
use App\Filament\Resources\ExperienceItems\Schemas\ExperienceItemForm;
use App\Filament\Resources\ExperienceItems\Schemas\ExperienceItemInfolist;
use App\Filament\Resources\ExperienceItems\Tables\ExperienceItemsTable;
use App\Models\ExperienceItem;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ExperienceItemResource extends Resource
{
    protected static ?string $model = ExperienceItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedAcademicCap;

    protected static ?string $modelLabel = 'Опыт автора';

    protected static ?string $pluralModelLabel = 'Опыт автора';

    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return ExperienceItemForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ExperienceItemInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ExperienceItemsTable::configure($table);
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
            'index' => ListExperienceItems::route('/'),
            'create' => CreateExperienceItem::route('/create'),
            'view' => ViewExperienceItem::route('/{record}'),
            'edit' => EditExperienceItem::route('/{record}/edit'),
        ];
    }
}
