<?php

namespace Database\Seeders;

use App\Models\ExperienceItem;
use App\Models\Image;
use App\Support\ExperienceItemFixtures;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienceItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $experienceItemData = ExperienceItemFixtures::getFixtures();

        for ($i = 0; $i < 2; $i++) {
            $experienceItemData->each(function (array $raw) {
                ExperienceItem::factory([
                    'title' => $raw['title'],
                    'heading' => $raw['heading'],
                    'description' => $raw['description'],
                    'body' => $raw['body'],
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
