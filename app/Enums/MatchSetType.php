<?php

namespace App\Enums;

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
            self::LENORMAND => \App\Models\Lenormand::class,
            self::RUNE => \App\Models\Rune::class,
        };
    }
}
