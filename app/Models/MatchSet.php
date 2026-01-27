<?php

namespace App\Models;

use App\Enums\MatchSetType;
use Illuminate\Database\Eloquent\Model;

class MatchSet extends Model
{
    protected $casts = [
        'ids' => 'array',
        'type' => MatchSetType::class,
    ];

    protected $attributes = [
        'ids' => '[]',
    ];
}
