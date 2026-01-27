<?php

namespace App\Filament\Resources\Lenormands\Pages;

use App\Filament\Resources\Lenormands\LenormandResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListLenormands extends ListRecords
{
    protected static string $resource = LenormandResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
