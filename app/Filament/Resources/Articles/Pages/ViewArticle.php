<?php

namespace App\Filament\Resources\Articles\Pages;

use App\Filament\Resources\Articles\ArticleResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewArticle extends ViewRecord
{
    protected static string $resource = ArticleResource::class;
    protected static ?string $title = 'Просмотр статьи';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
