<?php

namespace App\Filament\Resources\Ichings\Pages;

use App\Filament\Resources\Ichings\IchingResource;
use Filament\Resources\Pages\EditRecord;

class EditIching extends EditRecord
{
    protected static string $resource = IchingResource::class;
    protected static ?string $title = 'Редактирование толкования знака';

    protected function getHeaderActions(): array
    {
        return [
            // DeleteAction::make(),
        ];
    }
}
