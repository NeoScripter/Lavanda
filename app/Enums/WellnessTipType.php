<?php

namespace App\Enums;

enum WellnessTipType: string
{
    case TOOLKIT = 'toolkit';
    case RELAXATION = 'relaxation';

    public function getLabel(): string
    {
        return match ($this) {
            self::TOOLKIT => 'Полезные ресурсы',
            self::RELAXATION => 'Хочу расслабиться',
        };
    }
}
