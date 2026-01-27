<?php

namespace App\Models;

use App\Casts\IntegerArrayCast;
use App\Enums\MatchSetType;
use Illuminate\Database\Eloquent\Model;

class MatchSet extends Model
{
    protected $casts = [
        'ids' => IntegerArrayCast::class,
        'type' => MatchSetType::class,
    ];

    protected $attributes = [
        'ids' => '[]',
    ];
}
