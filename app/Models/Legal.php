<?php

namespace App\Models;

use Database\Factories\LegalFactory;
use App\Enums\LegalType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Legal extends Model
{
    /** @use HasFactory<LegalFactory> */
    use HasFactory;

    protected $casts = [
        'type' => LegalType::class,
    ];
}
