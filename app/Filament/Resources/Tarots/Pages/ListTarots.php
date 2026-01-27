<?php

namespace App\Filament\Resources\Tarots\Pages;

use App\Filament\Resources\Tarots\TarotResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTarots extends ListRecords
{
    protected static string $resource = TarotResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
