<?php

namespace App\Models;

use Database\Factories\AffirmationFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Affirmation extends Model
{
    /** @use HasFactory<AffirmationFactory> */
    use HasFactory;

    protected static function booted()
    {
        static::saving(function ($model): void {
            if (isset($model->type)) {
                $model->type = strtolower((string) $model->type);
            }
        });
    }
}
