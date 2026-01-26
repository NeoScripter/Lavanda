<?php

namespace App\Filament\Resources\WellnessTips\Pages;

use App\Filament\Resources\WellnessTips\WellnessTipResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListWellnessTips extends ListRecords
{
    protected static string $resource = WellnessTipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
