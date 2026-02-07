<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Casts\IntegerArrayCast;
use App\Enums\MatchSetType;
use Illuminate\Database\Eloquent\Model;

class MatchSet extends Model
{
    use HasFactory;
    protected $casts = [
        'ids' => IntegerArrayCast::class,
        'type' => MatchSetType::class,
    ];

    protected $attributes = [
        'ids' => '[]',
    ];
}
