<?php

namespace App\Models;

use Database\Factories\PracticeItemFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class PracticeItem extends Model
{
    /** @use HasFactory<PracticeItemFactory> */
    use HasFactory;

    protected $with = ['image', 'faqs'];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function faqs(): HasMany
    {
        return $this->hasMany(PracticeItemFaq::class);
    }
}
