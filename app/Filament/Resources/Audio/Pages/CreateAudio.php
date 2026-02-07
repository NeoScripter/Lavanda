<?php

namespace App\Filament\Resources\Audio\Pages;

use App\Filament\Resources\Audio\AudioResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAudio extends CreateRecord
{
    protected static string $resource = AudioResource::class;

    protected static ?string $title = 'Создание послания поддержки';

    protected static bool $canCreateAnother = false;
}
