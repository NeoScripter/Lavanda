<?php

namespace App\Models;

use App\Models\Concerns\ConvertsMarkdownToHtml;
use Database\Factories\RuneCategoryFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RuneCategory extends Model
{
    /** @use HasFactory<RuneCategoryFactory> */
    use ConvertsMarkdownToHtml, HasFactory;

    public function rune(): BelongsTo
    {
        return $this->belongsTo(Rune::class);
    }
}
