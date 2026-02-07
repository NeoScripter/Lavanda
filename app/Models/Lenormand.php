<?php

namespace App\Models;

use Database\Factories\LenormandFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Lenormand extends Model
{
    /** @use HasFactory<LenormandFactory> */
    use HasFactory;

    protected $with = ['frontImage'];

    public function images(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function frontImage(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
        // return $this->images()->where('type', 'front');
    }
}
