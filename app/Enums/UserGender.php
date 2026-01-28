<?php

namespace App\Enums;

enum UserGender: string
{
    case MALE = 'male';
    case FEMALE = 'female';

    public function getLabel(): string
    {
        return match ($this) {
            self::MALE => 'мужчина',
            self::FEMALE => 'женщина',
        };
    }

    public static function label(?self $gender): string
    {
        return $gender?->getLabel() ?? 'не указан';
    }
}
