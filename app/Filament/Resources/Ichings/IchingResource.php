<?php

namespace App\Filament\Resources\Ichings;

use App\Filament\Resources\Ichings\Pages\CreateIching;
use App\Filament\Resources\Ichings\Pages\EditIching;
use App\Filament\Resources\Ichings\Pages\ListIchings;
use App\Filament\Resources\Ichings\Schemas\IchingForm;
use App\Filament\Resources\Ichings\Tables\IchingsTable;
use App\Models\Iching;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class IchingResource extends Resource
{
    protected static ?string $model = Iching::class;


    protected static string|BackedEnum|null $navigationIcon = LucideIcon::LoaderPinwheel;
    protected static ?string $recordTitleAttribute = 'Iching';

    protected static ?string $modelLabel = 'Знак И-Цзин';
    protected static ?string $pluralModelLabel = 'Знаки И-Цзин';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return IchingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return IchingsTable::configure($table);
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
            'index' => ListIchings::route('/'),
            // 'create' => CreateIching::route('/create'),
            'edit' => EditIching::route('/{record}/edit'),
        ];
    }
}
