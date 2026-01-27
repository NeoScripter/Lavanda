<?php

namespace App\Filament\Resources\MatchSets\Pages;

use App\Filament\Resources\MatchSets\MatchSetResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListMatchSets extends ListRecords
{
    protected static string $resource = MatchSetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
