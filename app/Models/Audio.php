<?php

namespace App\Models;

use Database\Factories\AudioFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Audio extends Model
{
    /** @use HasFactory<AudioFactory> */
    use HasFactory;

    protected $appends = ['url'];

    protected function getUrlAttribute()
    {
        return Storage::disk('public')->url($this->attributes['path']);
    }
}
