<?php

namespace App\Filament\Resources\WellnessTips\Pages;

use App\Filament\Resources\WellnessTips\WellnessTipResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateWellnessTip extends CreateRecord
{
    protected static string $resource = WellnessTipResource::class;

    protected static ?string $title = 'Создание полезного ресурса';

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
            'wellness'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
