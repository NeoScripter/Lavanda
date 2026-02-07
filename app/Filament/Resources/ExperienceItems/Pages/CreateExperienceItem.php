<?php

namespace App\Filament\Resources\ExperienceItems\Pages;

use App\Filament\Resources\ExperienceItems\ExperienceItemResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateExperienceItem extends CreateRecord
{
    protected static string $resource = ExperienceItemResource::class;

    protected static ?string $title = 'Создание элемента';

    protected static bool $canCreateAnother = false;

    protected function afterSave(): void
    {
        $image = $this->record->image;

        if (! $image?->path) {
            return;
        }

        $resizer = resolve(ImageResizer::class);

        $tinyPath = $resizer->handleExistingPath(
            $image->path,
            30,
            'experience'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
