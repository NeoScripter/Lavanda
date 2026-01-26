<?php

namespace App\Filament\Resources\PracticeItems\Pages;

use App\Filament\Resources\PracticeItems\PracticeItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPracticeItems extends ListRecords
{
    protected static string $resource = PracticeItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
