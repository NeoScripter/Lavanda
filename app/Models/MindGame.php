<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class MindGame extends Model
{
    /** @use HasFactory<\Database\Factories\MindGameFactory> */
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
