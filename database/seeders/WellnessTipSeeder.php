<?php

namespace Database\Seeders;

use App\Enums\WellnessTipType;
use App\Models\Image;
use App\Models\WellnessTip;
use App\Support\WellnessTipFixtures;
use Illuminate\Database\Seeder;

class WellnessTipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $wellnessTipData = WellnessTipFixtures::getFixtures();

        foreach (WellnessTipType::cases() as $type) {

            for ($i = 0; $i < 8; $i++) {
                $wellnessTipData->each(function (array $raw) use ($type) {
                    WellnessTip::factory([
                        'type' => $type,
                        'description' => $raw['description'],
                        'url' => $raw['url'],
                    ])
                    ->afterCreating(function ($tip) use ($raw) {
                        Image::factory()->create([
                            'imageable_id' => $tip,
                            'alt' => $raw['alt'],
                            'path' => 'models/' . $raw['image'],
                            'tiny_path' => 'models/' . $raw['tiny_image'],
                        ]);
                    })
                    ->create();
                });
            }
        }
    }
}
