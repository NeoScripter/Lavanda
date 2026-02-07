<?php

namespace App\Models;

use App\Enums\LegalType;
use Database\Factories\LegalFactory;
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
