<?php

namespace App\Filament\Resources\Audio;

use App\Filament\Resources\Audio\Pages\CreateAudio;
use App\Filament\Resources\Audio\Pages\EditAudio;
use App\Filament\Resources\Audio\Pages\ListAudio;
use App\Filament\Resources\Audio\Schemas\AudioForm;
use App\Filament\Resources\Audio\Tables\AudioTable;
use App\Models\Audio;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class AudioResource extends Resource
{
    protected static ?string $model = Audio::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMusicalNote;

    protected static ?string $recordTitleAttribute = 'Audio';
    protected static ?string $modelLabel = 'Послание поддержки';
    protected static ?string $pluralModelLabel = 'Послания поддержки';
    protected static bool $hasTitleCaseModelLabel = false;

    public static function form(Schema $schema): Schema
    {
        return AudioForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AudioTable::configure($table);
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
            'index' => ListAudio::route('/'),
            'create' => CreateAudio::route('/create'),
            'edit' => EditAudio::route('/{record}/edit'),
        ];
    }
}
