<?php

namespace App\Filament\Resources\WellnessTips\Pages;

use App\Filament\Resources\WellnessTips\WellnessTipResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditWellnessTip extends EditRecord
{
    protected static string $resource = WellnessTipResource::class;
    protected static ?string $title = 'Редактировать полезный ресурс';

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }

    protected function afterSave(): void
    {
        $image = $this->record->image;

        if ($image?->path) {
            $resizer = app(ImageResizer::class);

            $path = $resizer->handleExistingPath($image->path, 30, 'wellness');

            $image->tiny_path = $path;
            $image->saveQuietly();
        }
    }
}
