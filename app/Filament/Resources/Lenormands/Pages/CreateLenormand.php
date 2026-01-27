<?php

namespace App\Filament\Resources\Lenormands\Pages;

use App\Filament\Resources\Lenormands\LenormandResource;
use Filament\Resources\Pages\CreateRecord;

class CreateLenormand extends CreateRecord
{
    protected static string $resource = LenormandResource::class;
    protected static ?string $title = 'Создание карты';

    protected static bool $canCreateAnother = false;
}
