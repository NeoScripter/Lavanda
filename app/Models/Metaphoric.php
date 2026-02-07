<?php

namespace App\Models;

use Database\Factories\MetaphoricFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Metaphoric extends Model
{
    /** @use HasFactory<MetaphoricFactory> */
    use HasFactory;

    protected $with = ['frontImage'];

    public function images(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function frontImage(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
