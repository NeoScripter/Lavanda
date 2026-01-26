<?php

namespace App\Filament\Resources\Legals\Pages;

use App\Filament\Resources\Legals\LegalResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewLegal extends ViewRecord
{
    protected static string $resource = LegalResource::class;
    protected static ?string $title = 'Просмотр документа';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
