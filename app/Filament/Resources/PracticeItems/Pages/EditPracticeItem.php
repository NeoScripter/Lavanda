<?php

namespace App\Filament\Resources\PracticeItems\Pages;

use App\Filament\Resources\PracticeItems\PracticeItemResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditPracticeItem extends EditRecord
{
    protected static string $resource = PracticeItemResource::class;
    protected static ?string $title = 'Редактирование элемента опыта автора';

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make()
                ->modalHeading('Удалить данный элемент'),
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
