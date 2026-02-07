<?php

namespace App\Support;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use SplFileInfo;

class ExperienceItemFixtures
{
    public static function getFixtures(): Collection
    {
        return once(fn () => collect(File::files(database_path('factories/fixtures/experience-items')))
            ->map(fn (SplFileInfo $fileInfo): string => $fileInfo->getContents())
            ->map(fn (string $contents) => str($contents)->explode("\n\n", 7))
            ->map(fn (Collection $parts): array => [
                'image' => str($parts[0])->trim(),
                'tiny_image' => str($parts[1])->trim(),
                'alt' => str($parts[2])->trim(),
                'title' => str($parts[3])->trim(),
                'heading' => str($parts[4])->trim(),
                'description' => str($parts[5])->trim(),
                'body' => str($parts[6])->trim(),
            ]));
    }
}
