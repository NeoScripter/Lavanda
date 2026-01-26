<?php

namespace App\Filament\Resources\PracticeItems\Pages;

use App\Filament\Resources\PracticeItems\PracticeItemResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePracticeItem extends CreateRecord
{
    protected static string $resource = PracticeItemResource::class;
    protected static ?string $title = 'Создание элемента';

    protected static bool $canCreateAnother = false;
}
