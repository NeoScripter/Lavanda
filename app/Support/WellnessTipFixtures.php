<?php

namespace App\Support;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use SplFileInfo;

class WellnessTipFixtures
{
    public static function getFixtures(): Collection
    {
        return once(fn () => collect(File::files(database_path('factories/fixtures/wellness-tips')))
            ->map(fn (SplFileInfo $fileInfo): string => $fileInfo->getContents())
            ->map(fn (string $contents) => str($contents)->explode("\n\n", 4))
            ->map(fn (Collection $parts): array => [
                'image' => str($parts[0])->trim(),
                'tiny_image' => str($parts[1])->trim(),
                'url' => str($parts[2])->trim(),
                'description' => str($parts[3])->trim(),
                'alt' => str($parts[3])->trim(),
            ]));
    }
}
