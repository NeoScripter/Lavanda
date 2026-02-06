<?php

namespace App\Filament\Resources\Lenormands;

use App\Filament\Resources\Lenormands\Pages\CreateLenormand;
use App\Filament\Resources\Lenormands\Pages\EditLenormand;
use App\Filament\Resources\Lenormands\Pages\ListLenormands;
use App\Filament\Resources\Lenormands\Schemas\LenormandForm;
use App\Filament\Resources\Lenormands\Tables\LenormandsTable;
use App\Models\Lenormand;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class LenormandResource extends Resource
{
    protected static ?string $model = Lenormand::class;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::Rose;

    protected static ?string $modelLabel = 'Карта Ленорман';
    protected static ?string $pluralModelLabel = 'Карты Ленорман';
    protected static bool $hasTitleCaseModelLabel = false;


    public static function form(Schema $schema): Schema
    {
        return LenormandForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return LenormandsTable::configure($table);
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
            'index' => ListLenormands::route('/'),
            'create' => CreateLenormand::route('/create'),
            'edit' => EditLenormand::route('/{record}/edit'),
        ];
    }
}
