<?php

namespace App\Filament\Resources\ExperienceItems\Pages;

use App\Filament\Resources\ExperienceItems\ExperienceItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListExperienceItems extends ListRecords
{
    protected static string $resource = ExperienceItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
