<?php

namespace App\Filament\Resources\Metaphorics\Pages;

use App\Filament\Resources\Metaphorics\MetaphoricResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMetaphoric extends EditRecord
{
    protected static string $resource = MetaphoricResource::class;
    protected static ?string $title = 'Редактирование метафорической карты';

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()
                ->modalHeading('Удалить данную карту'),
        ];
    }

    protected function afterSave(): void
    {
        $image = $this->record->frontImage;

        if ($image?->path) {
            $resizer = app(ImageResizer::class);

            $path = $resizer->handleExistingPath($image->path, 30, 'metaphoric');

            $image->tiny_path = $path;
            $image->saveQuietly();
        }
    }
}
