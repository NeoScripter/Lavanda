<?php

namespace App\Models;

use App\Models\Concerns\ConvertsMarkdownToHtml;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class ExperienceItem extends Model
{
    /** @use HasFactory<\Database\Factories\ExperienceItemFactory> */
    use HasFactory, ConvertsMarkdownToHtml;

    protected $with = ['image'];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
