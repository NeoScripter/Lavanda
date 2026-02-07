<?php

namespace App\Models;

use Database\Factories\PracticeItemFaqFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PracticeItemFaq extends Model
{
    /** @use HasFactory<PracticeItemFaqFactory> */
    use HasFactory;

    public function practiceItem(): BelongsTo
    {
        return $this->belongsTo(PracticeItem::class);
    }
}
