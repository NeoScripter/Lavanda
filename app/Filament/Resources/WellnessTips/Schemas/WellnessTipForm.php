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
                        ->options(
                            fn() => collect(WellnessTipType::cases())
                                ->mapWithKeys(fn($type) => [$type->value => $type->getLabel()])
                                ->toArray()
                        )
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
                            ->maxSize(4128)
                            ->saveUploadedFileUsing(
                                fn($file) =>
                                app(ImageResizer::class)
                                    ->handleImage($file, 300, 'wellness')
                            ),
                        Textarea::make('alt')
                            ->requiredWith('path')
                            ->label('Альтернативный текст к фото')
                    ]),
            ]);
    }
}
