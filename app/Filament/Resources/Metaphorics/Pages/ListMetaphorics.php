<?php

namespace App\Filament\Resources\Metaphorics\Pages;

use App\Filament\Resources\Metaphorics\MetaphoricResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMetaphorics extends ListRecords
{
    protected static string $resource = MetaphoricResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
