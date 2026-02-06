<?php

namespace App\Filament\Resources\Metaphorics\Pages;

use App\Filament\Resources\Metaphorics\MetaphoricResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateMetaphoric extends CreateRecord
{
    protected static string $resource = MetaphoricResource::class;
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

        $resizer = app(ImageResizer::class);

        $tinyPath = $resizer->handleExistingPath(
            $image->path,
            30,
            'metaphoric'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
