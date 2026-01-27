<?php

namespace App\Filament\Resources\Ichings\Pages;

use App\Filament\Resources\Ichings\IchingResource;
use Filament\Resources\Pages\ListRecords;

class ListIchings extends ListRecords
{
    protected static string $resource = IchingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // CreateAction::make(),
        ];
    }
}
