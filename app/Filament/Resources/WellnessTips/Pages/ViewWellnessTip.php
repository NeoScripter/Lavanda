<?php

namespace App\Filament\Resources\WellnessTips\Pages;

use App\Filament\Resources\WellnessTips\WellnessTipResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewWellnessTip extends ViewRecord
{
    protected static string $resource = WellnessTipResource::class;

    protected static ?string $title = 'Просмотр полезного ресурса';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
