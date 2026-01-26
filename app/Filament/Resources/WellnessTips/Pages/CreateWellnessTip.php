<?php

namespace App\Filament\Resources\WellnessTips\Pages;

use App\Filament\Resources\WellnessTips\WellnessTipResource;
use Filament\Resources\Pages\CreateRecord;

class CreateWellnessTip extends CreateRecord
{
    protected static string $resource = WellnessTipResource::class;
    protected static ?string $title = 'Создание полезного ресурса';

    protected static bool $canCreateAnother = false;
}
