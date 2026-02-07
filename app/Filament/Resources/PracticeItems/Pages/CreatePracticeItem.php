<?php

namespace App\Filament\Resources\PracticeItems\Pages;

use App\Filament\Resources\PracticeItems\PracticeItemResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreatePracticeItem extends CreateRecord
{
    protected static string $resource = PracticeItemResource::class;

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
            'wellness'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
