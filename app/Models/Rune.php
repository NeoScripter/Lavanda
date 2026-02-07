<?php

namespace App\Models;

use Database\Factories\RuneFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Rune extends Model
{
    /** @use HasFactory<RuneFactory> */
    use HasFactory;

    protected $with = ['frontImage', 'backImage'];

    public function categories(): HasMany
    {
        return $this->hasMany(RuneCategory::class);
    }

    public function images(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function frontImage(): MorphOne
    {
        return $this->images()->where('type', 'front');
    }

    public function backImage(): MorphOne
    {
        return $this->images()->where('type', 'back');
    }
}
