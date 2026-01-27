<?php

namespace App\Filament\Resources\Ichings\Pages;

use App\Filament\Resources\Ichings\IchingResource;
use Filament\Resources\Pages\CreateRecord;

class CreateIching extends CreateRecord
{
    protected static string $resource = IchingResource::class;

    protected static bool $canCreateAnother = false;
}
