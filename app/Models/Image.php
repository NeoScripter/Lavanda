<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\MorphTo;


class Image extends Model
{
    /** @use HasFactory<\Database\Factories\ImageFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }

    public function getPathAttribute(): string
    {
        return Storage::disk('public')->url($this->attributes['path']);
    }

    public function getTinyPathAttribute(): string
    {
        return Storage::disk('public')->url($this->attributes['tiny_path']);
    }

    protected static function booted(): void
    {
        static::deleting(function (Image $image) {
            Storage::disk('public')->delete([
                $image->getRawOriginal('path'),
                $image->getRawOriginal('tiny_path'),
            ]);
        });
    }
}
