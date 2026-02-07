<?php

namespace App\Filament\Resources\MatchSets\Pages;

use App\Filament\Resources\MatchSets\MatchSetResource;
use Filament\Resources\Pages\CreateRecord;

class CreateMatchSet extends CreateRecord
{
    protected static string $resource = MatchSetResource::class;

    protected static ?string $title = 'Создание комбинации';

    protected static bool $canCreateAnother = false;
}
