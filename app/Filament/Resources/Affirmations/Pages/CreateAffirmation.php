<?php

namespace App\Filament\Resources\Affirmations\Pages;

use App\Filament\Resources\Affirmations\AffirmationResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAffirmation extends CreateRecord
{
    protected static string $resource = AffirmationResource::class;
    protected static ?string $title = 'Создание аффирмации';

    protected static bool $canCreateAnother = false;
}
