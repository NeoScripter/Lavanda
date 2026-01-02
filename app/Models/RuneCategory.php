<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RuneCategory extends Model
{
    /** @use HasFactory<\Database\Factories\RuneCategoryFactory> */
    use HasFactory;

    public function rune(): BelongsTo
    {
        return $this->belongsTo(Rune::class);
    }
}
