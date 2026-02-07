<?php

namespace App\Filament\Resources\Lenormands\Pages;

use App\Filament\Resources\Lenormands\LenormandResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateLenormand extends CreateRecord
{
    protected static string $resource = LenormandResource::class;
    protected static ?string $title = 'Создание карты';

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

        $resizer = resolve(ImageResizer::class);

        $tinyPath = $resizer->handleExistingPath(
            $image->path,
            30,
            'lenormand'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
