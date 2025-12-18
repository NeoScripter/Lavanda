<?php

namespace App\Models;

use App\Enums\WellnessTipType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class WellnessTip extends Model
{
    /** @use HasFactory<\Database\Factories\WellnessTipFactory> */
    use HasFactory;

    protected $casts = [
        'type' => WellnessTipType::class,
    ];

    protected $with = ['image'];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
