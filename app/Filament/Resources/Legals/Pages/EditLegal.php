<?php

namespace App\Filament\Resources\Legals\Pages;

use App\Filament\Resources\Legals\LegalResource;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditLegal extends EditRecord
{
    protected static string $resource = LegalResource::class;
    protected static ?string $title = 'Редактирование документа';

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            // DeleteAction::make(),
        ];
    }
}
