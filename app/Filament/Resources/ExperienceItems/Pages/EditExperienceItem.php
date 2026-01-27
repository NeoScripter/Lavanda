<?php

namespace App\Filament\Resources\ExperienceItems\Pages;

use App\Filament\Resources\ExperienceItems\ExperienceItemResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditExperienceItem extends EditRecord
{
    protected static string $resource = ExperienceItemResource::class;
    protected static ?string $title = 'Редактирование элемента';

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

            $path = $resizer->handleExistingPath($image->path, 30, 'experience');

            $image->tiny_path = $path;
            $image->saveQuietly();
        }
    }
}
