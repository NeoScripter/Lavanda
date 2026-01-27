<?php

namespace App\Filament\Resources\MindGames\Pages;

use App\Filament\Resources\MindGames\MindGameResource;
use Filament\Resources\Pages\CreateRecord;

class CreateMindGame extends CreateRecord
{
    protected static string $resource = MindGameResource::class;
    protected static ?string $title = 'Создание карты';

    protected static bool $canCreateAnother = false;
}
