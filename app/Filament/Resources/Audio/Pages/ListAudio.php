<?php

namespace App\Filament\Resources\Audio\Pages;

use App\Filament\Resources\Audio\AudioResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAudio extends ListRecords
{
    protected static string $resource = AudioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
