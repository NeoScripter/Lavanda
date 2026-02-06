<?php

namespace App\Filament\Resources\Lenormands\Pages;

use App\Filament\Resources\Lenormands\LenormandResource;
use App\Services\ImageResizer;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditLenormand extends EditRecord
{
    protected static string $resource = LenormandResource::class;
    protected static ?string $title = 'Редактирование карты Ленорман';

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
            'lenormand'
        );

        $image->tiny_path = $tinyPath;
        $image->saveQuietly();
    }
}
