<?php

namespace App\Filament\Resources\Affirmations\Pages;

use App\Filament\Resources\Affirmations\AffirmationResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditAffirmation extends EditRecord
{
    protected static string $resource = AffirmationResource::class;

    protected static ?string $title = 'Редактирование аффирмации';

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()
                ->modalHeading('Удалить данную аффирмацию'),
        ];
    }
}
