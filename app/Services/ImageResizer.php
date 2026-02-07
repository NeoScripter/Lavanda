<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

class ImageResizer
{
    public function handleImage(UploadedFile $file, int $size = 300, string $directory = 'uploads'): string
    {
        $filename = Str::random(32); // random hash instead of original name

        $manager = new ImageManager(new Driver);
        $image = $manager->read($file)->scaleDown(width: $size)->toWebp(80);

        $path = $directory."/{$filename}.webp";

        Storage::disk('public')->makeDirectory($directory);
        Storage::disk('public')->put($path, (string) $image);

        return $path;
    }

    public function handleExistingPath(string $originalPath, int $size = 300, string $directory = 'uploads'): string
    {
        $disk = Storage::disk('public');
        $relativePath = str_replace(url('/storage').'/', '', $originalPath);
        $tmpFile = $disk->path($relativePath);

        $uploadedFile = new UploadedFile($tmpFile, basename($tmpFile));

        return $this->handleImage($uploadedFile, $size, $directory);
    }
}
