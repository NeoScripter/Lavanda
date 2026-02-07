<?php

namespace App\Models;

use Database\Factories\RuneCategoryFactory;
use App\Models\Concerns\ConvertsMarkdownToHtml;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RuneCategory extends Model
{
    /** @use HasFactory<RuneCategoryFactory> */
    use HasFactory, ConvertsMarkdownToHtml;

    public function rune(): BelongsTo
    {
        return $this->belongsTo(Rune::class);
    }
}
