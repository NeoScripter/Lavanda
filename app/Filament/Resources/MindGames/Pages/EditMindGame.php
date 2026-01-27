<?php

namespace App\Filament\Resources\MindGames\Pages;

use App\Filament\Resources\MindGames\MindGameResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMindGame extends EditRecord
{
    protected static string $resource = MindGameResource::class;
    protected static ?string $title = 'Редактирование карты';

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()
                ->modalHeading('Удалить данную карту'),
        ];
    }

    protected function afterSave(): void
    {
        $image = $this->record->image;

        if ($image?->path) {
            $resizer = app(ImageResizer::class);

            $path = $resizer->handleExistingPath($image->path, 30, 'mindgames');

            $image->tiny_path = $path;
            $image->saveQuietly();
        }
    }
}
