<?php

namespace App\Filament\Resources\Tarots\Pages;

use App\Filament\Resources\Tarots\TarotResource;
use Filament\Resources\Pages\CreateRecord;

class CreateTarot extends CreateRecord
{
    protected static string $resource = TarotResource::class;
    protected static ?string $title = 'Создание карты';

    protected static bool $canCreateAnother = false;
}
