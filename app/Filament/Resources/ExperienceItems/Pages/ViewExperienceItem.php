<?php

namespace App\Filament\Resources\ExperienceItems\Pages;

use App\Filament\Resources\ExperienceItems\ExperienceItemResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewExperienceItem extends ViewRecord
{
    protected static string $resource = ExperienceItemResource::class;
    protected static ?string $title = 'Просмотр элемента';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
