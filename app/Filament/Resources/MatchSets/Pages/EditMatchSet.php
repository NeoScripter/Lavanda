<?php

namespace App\Filament\Resources\MatchSets\Pages;

use App\Filament\Resources\MatchSets\MatchSetResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMatchSet extends EditRecord
{
    protected static string $resource = MatchSetResource::class;
    protected static ?string $title = 'Редактирование комбинации';

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()
                ->modalHeading('Удалить данную комбинацию'),
        ];
    }
}
