<?php

namespace App\Filament\Resources\Tarots;

use App\Filament\Resources\Tarots\Pages\CreateTarot;
use App\Filament\Resources\Tarots\Pages\EditTarot;
use App\Filament\Resources\Tarots\Pages\ListTarots;
use App\Filament\Resources\Tarots\Schemas\TarotForm;
use App\Filament\Resources\Tarots\Tables\TarotsTable;
use App\Models\Tarot;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class TarotResource extends Resource
{
    protected static ?string $model = Tarot::class;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::Diamond;

    protected static ?string $modelLabel = 'Карта Таро';
    protected static ?string $pluralModelLabel = 'Карты Таро';
    protected static bool $hasTitleCaseModelLabel = false;


    public static function form(Schema $schema): Schema
    {
        return TarotForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TarotsTable::configure($table);
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
            'index' => ListTarots::route('/'),
            'create' => CreateTarot::route('/create'),
            'edit' => EditTarot::route('/{record}/edit'),
        ];
    }
}
