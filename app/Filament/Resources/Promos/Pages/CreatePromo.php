<?php

namespace App\Filament\Resources\Promos\Pages;

use App\Filament\Resources\Promos\PromoResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreatePromo extends CreateRecord
{
    protected static string $resource = PromoResource::class;
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
            'promo'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
