<?php

namespace App\Enums;

enum SubscriptionEventName: int
{
    case EXPIRED  = 1;
    case EXPIRES_SOON = 2;
    case PURCHASE = 3;

    public function getLabel(): string
    {
        return match ($this) {
            self::EXPIRED => 'ended',
            self::EXPIRES_SOON => 'ends_soon',
            self::PURCHASE => 'purchase',
        };
    }
}
