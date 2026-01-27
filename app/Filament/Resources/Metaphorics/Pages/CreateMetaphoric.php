<?php

namespace App\Filament\Resources\Metaphorics\Pages;

use App\Filament\Resources\Metaphorics\MetaphoricResource;
use Filament\Resources\Pages\CreateRecord;

class CreateMetaphoric extends CreateRecord
{
    protected static string $resource = MetaphoricResource::class;
    protected static ?string $title = 'Создание карты';

    protected static bool $canCreateAnother = false;
}
