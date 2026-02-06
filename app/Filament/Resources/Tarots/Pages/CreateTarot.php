<?php

namespace App\Filament\Resources\Tarots\Pages;

use App\Filament\Resources\Tarots\TarotResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateTarot extends CreateRecord
{
    protected static string $resource = TarotResource::class;
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
            'tarot'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
