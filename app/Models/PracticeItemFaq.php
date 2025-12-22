<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PracticeItemFaq extends Model
{
    /** @use HasFactory<\Database\Factories\PracticeItemFaqFactory> */
    use HasFactory;

    public function practiceItem(): BelongsTo
    {
        return $this->belongsTo(PracticeItem::class);
    }
}
