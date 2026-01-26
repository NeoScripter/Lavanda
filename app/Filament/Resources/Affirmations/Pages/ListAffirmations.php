<?php

namespace App\Filament\Resources\Affirmations\Pages;

use App\Filament\Resources\Affirmations\AffirmationResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAffirmations extends ListRecords
{
    protected static string $resource = AffirmationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
