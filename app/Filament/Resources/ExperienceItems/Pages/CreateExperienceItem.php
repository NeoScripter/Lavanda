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
        $image = $this->record->frontImage;

        if (! $image?->path) {
            return;
        }

        if ($image->type !== 'front') {
            $image->type = 'front';
        }

        $resizer = app(ImageResizer::class);

        $tinyPath = $resizer->handleExistingPath(
            $image->path,
            30,
            'experience'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
