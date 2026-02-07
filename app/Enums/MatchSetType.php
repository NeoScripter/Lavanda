<?php

namespace App\Enums;

use App\Models\Lenormand;
use App\Models\Rune;

enum MatchSetType: string
{
    // case TAROT = 'tarot';
    // case METAPHORIC = 'metaphoric';
    // case PROMO = 'promo';
    case RUNE = 'rune';
    case LENORMAND = 'lenormand';

    public function getLabel(): string
    {
        return match ($this) {
            self::LENORMAND => 'Ленорман',
            self::RUNE => 'Руны',
        };
    }

    public function getModelClass(): string
    {
        return match ($this) {
            self::LENORMAND => Lenormand::class,
            self::RUNE => Rune::class,
        };
    }
}
