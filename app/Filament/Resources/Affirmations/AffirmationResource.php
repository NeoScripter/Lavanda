<?php

namespace App\Filament\Resources\Affirmations;

use App\Filament\Resources\Affirmations\Pages\CreateAffirmation;
use App\Filament\Resources\Affirmations\Pages\EditAffirmation;
use App\Filament\Resources\Affirmations\Pages\ListAffirmations;
use App\Filament\Resources\Affirmations\Schemas\AffirmationForm;
use App\Filament\Resources\Affirmations\Tables\AffirmationsTable;
use App\Models\Affirmation;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class AffirmationResource extends Resource
{
    protected static ?string $model = Affirmation::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBookOpen;

    protected static ?string $recordTitleAttribute = 'Affirmation';
    protected static ?string $modelLabel = 'Аффирмация';
    protected static ?string $pluralModelLabel = 'Аффирмации';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return AffirmationForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AffirmationsTable::configure($table);
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
            'index' => ListAffirmations::route('/'),
            'create' => CreateAffirmation::route('/create'),
            'edit' => EditAffirmation::route('/{record}/edit'),
        ];
    }
}
