<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Lenormand extends Model
{
    /** @use HasFactory<\Database\Factories\LenormandFactory> */
    use HasFactory;

    protected $with = ['frontImage'];

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function frontImage(): MorphOne
    {
        return $this->images()->where('type', 'front');
    }
}
