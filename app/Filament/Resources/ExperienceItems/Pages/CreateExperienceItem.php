<?php

namespace App\Filament\Resources\ExperienceItems\Pages;

use App\Filament\Resources\ExperienceItems\ExperienceItemResource;
use Filament\Resources\Pages\CreateRecord;

class CreateExperienceItem extends CreateRecord
{
    protected static string $resource = ExperienceItemResource::class;
    protected static ?string $title = 'Создание элемента';

    protected static bool $canCreateAnother = false;
}
