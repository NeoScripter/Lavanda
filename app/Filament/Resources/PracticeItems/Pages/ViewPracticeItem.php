<?php

namespace App\Filament\Resources\PracticeItems\Pages;

use App\Filament\Resources\PracticeItems\PracticeItemResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewPracticeItem extends ViewRecord
{
    protected static string $resource = PracticeItemResource::class;
    protected static ?string $title = 'Просмотр элемента опыта автора';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
