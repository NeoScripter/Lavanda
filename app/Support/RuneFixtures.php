<?php

namespace App\Support;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use SplFileInfo;

class RuneFixtures
{
    public static function getFixtures(): Collection
    {
        return once(fn () => collect(File::files(database_path('factories/fixtures/runes')))
            ->map(fn (SplFileInfo $fileInfo): string => $fileInfo->getContents())
            ->map(fn (string $contents) => str($contents)->explode("\n\n\n"))
            ->map(fn (Collection $parts): array => [
                'front_image' => str($parts[0])->trim(),
                'tiny_front_image' => str($parts[1])->trim(),
                'back_image' => str($parts[2])->trim(),
                'tiny_back_image' => str($parts[3])->trim(),
                'name' => str($parts[4])->trim(),
                'advice' => str($parts[5])->trim(),
                'cat1' => str($parts[6])->trim(),
                'cat2' => str($parts[7])->trim(),
                'cat3' => str($parts[8])->trim(),
            ]));
    }
}
