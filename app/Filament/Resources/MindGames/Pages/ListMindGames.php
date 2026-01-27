<?php

namespace App\Filament\Resources\MindGames\Pages;

use App\Filament\Resources\MindGames\MindGameResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMindGames extends ListRecords
{
    protected static string $resource = MindGameResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
