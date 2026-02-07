<?php

namespace App\Models;

use Database\Factories\ImageFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\MorphTo;


class Image extends Model
{
    /** @use HasFactory<ImageFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }

    protected function getPathAttribute(): string
    {
        return Storage::disk('public')->url($this->attributes['path']);
    }

    protected function getTinyPathAttribute(): string
    {
        return Storage::disk('public')->url($this->attributes['tiny_path']);
    }

    protected static function booted(): void
    {
        static::deleting(function (Image $image): void {
            Storage::disk('public')->delete([
                $image->getRawOriginal('path'),
                $image->getRawOriginal('tiny_path'),
            ]);
        });

        // static::updated(function (Image $image) {
        //     // Only create tiny image if it doesn't exist yet
        //     if ($image->path) {
        //         $resizer = app(ImageResizer::class);

        //         // The file on disk
        //         $disk = Storage::disk('public');
        //         $originalPath = $image->getRawOriginal('path');
        //         $tmpFile = $disk->path($originalPath);

        //         // Wrap original file as UploadedFile so handleImage works
        //         $uploadedFile = new \Illuminate\Http\UploadedFile(
        //             $tmpFile,
        //             'image/webp',
        //         );

        //         // Generate tiny image
        //         $paths = $resizer->handleImage($uploadedFile, 300, dirname($originalPath));

        //         // Update the tiny_path only
        //         $image->tiny_path = $paths['tiny_path'];
        //         $image->saveQuietly(); // avoid triggering events again
        //     }
        // });
    }
}
