<?php

namespace App\Filament\Resources\MindGames\Pages;

use App\Filament\Resources\MindGames\MindGameResource;
use App\Services\ImageResizer;
use Filament\Resources\Pages\CreateRecord;

class CreateMindGame extends CreateRecord
{
    protected static string $resource = MindGameResource::class;
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
            'mindgames'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
