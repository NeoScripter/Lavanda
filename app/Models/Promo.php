<?php

namespace App\Models;

use App\Models\Concerns\ConvertsMarkdownToHtml;
use Database\Factories\PromoFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Promo extends Model
{
    /** @use HasFactory<PromoFactory> */
    use ConvertsMarkdownToHtml, HasFactory;

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
