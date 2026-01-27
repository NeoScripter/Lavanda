<?php

namespace App\Filament\Resources\Tarots\Pages;

use App\Filament\Resources\Tarots\TarotResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTarot extends EditRecord
{
    protected static string $resource = TarotResource::class;
    protected static ?string $title = 'Редактирование карты Таро';

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

            $path = $resizer->handleExistingPath($image->path, 30, 'tarot');

            $image->tiny_path = $path;
            $image->saveQuietly();
        }
    }
}
