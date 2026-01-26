<?php

namespace App\Filament\Resources\WellnessTips\Schemas;

use App\Enums\WellnessTipType;
use App\Services\ImageResizer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class WellnessTipForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    Select::make('type')
                        ->options(WellnessTipType::class)
                        ->formatStateUsing(fn(WellnessTipType $state): string => $state->getLabel())
                        ->label('Раздел')
                        ->required(),
                    Textarea::make('description')
                        ->required()
                        ->label('Содержание'),
                    TextInput::make('url')
                        ->url()
                        ->label('Ссылка')
                        ->required(),
                ]),

                Section::make()
                    ->relationship('image')
                    ->schema([
                    FileUpload::make('path')
                        ->image()
                        ->disk('public')
                        ->label('Изображение')
                        ->maxSize(1024)
                        ->saveUploadedFileUsing(
                            fn($file) =>
                            app(ImageResizer::class)
                                ->handleImage($file, 300, 'wellness')
                        ),
                ]),
            ]);
    }
}
