<?php

namespace App\Enums;

enum LegalType: string
{
    case CONSENT = 'consent';
    case POLICY = 'policy';

    public function getLabel(): string
    {
        return match ($this) {
            self::CONSENT => 'Пользовательское соглашение',
            self::POLICY => 'Политика конфиденциальности',
        };
    }
}
