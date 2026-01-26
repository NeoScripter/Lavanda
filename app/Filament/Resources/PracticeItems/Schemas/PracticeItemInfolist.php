<?php

namespace App\Filament\Resources\PracticeItems\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Text;
use Filament\Support\Enums\FontWeight;


class PracticeItemInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextEntry::make('title')
                        ->label('Заголовок'),
                    TextEntry::make('description')
                        ->label('Описание')
                        ->columnSpanFull(),
                    TextEntry::make('heading')
                        ->label('Заголовок списка'),
                    TextEntry::make('body')
                        ->label('Подзаголовок списка')
                        ->columnSpanFull(),
                ]),
                Section::make()->schema([
                    ImageEntry::make('image.path')
                        ->imageWidth(250)
                        ->imageHeight(250)
                        ->label('Изображение')
                ]),
                Section::make()->schema([
                    RepeatableEntry::make('faqs')
                        ->hiddenLabel()
                        ->aboveContent(Text::make('Подпункты')
                            ->size('lg')
                            ->weight(FontWeight::Bold))
                        ->schema([
                            TextEntry::make('question')->label('Вопрос'),
                            TextEntry::make('answer')->label('Ответ')
                        ])
                        ->gap('lg')
                        ->columns(2)
                        ->contained(false)
                ]),
            ]);
    }
}
