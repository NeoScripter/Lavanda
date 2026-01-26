<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Affirmation extends Model
{
    /** @use HasFactory<\Database\Factories\AffirmationFactory> */
    use HasFactory;

    protected static function booted()
    {
        static::saving(function ($model) {
            if (isset($model->type)) {
                $model->type = strtolower($model->type);
            }
        });
    }
}
