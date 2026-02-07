<?php

namespace App\Filament\Resources\MindGames;

use App\Filament\Resources\MindGames\Pages\CreateMindGame;
use App\Filament\Resources\MindGames\Pages\EditMindGame;
use App\Filament\Resources\MindGames\Pages\ListMindGames;
use App\Filament\Resources\MindGames\Schemas\MindGameForm;
use App\Filament\Resources\MindGames\Tables\MindGamesTable;
use App\Models\MindGame;
use BackedEnum;
use CodeWithDennis\FilamentLucideIcons\Enums\LucideIcon;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class MindGameResource extends Resource
{
    protected static ?string $model = MindGame::class;

    protected static string|BackedEnum|null $navigationIcon = LucideIcon::Brain;

    protected static ?string $modelLabel = 'Карта игр разума';

    protected static ?string $pluralModelLabel = 'Карты игр разума';

    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return MindGameForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MindGamesTable::configure($table);
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
            'index' => ListMindGames::route('/'),
            'create' => CreateMindGame::route('/create'),
            'edit' => EditMindGame::route('/{record}/edit'),
        ];
    }
}
