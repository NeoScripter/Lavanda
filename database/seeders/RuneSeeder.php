<?php

namespace Database\Seeders;

use App\Enums\RuneCategoryName;
use App\Models\Image;
use App\Models\Rune;
use App\Models\RuneCategory;
use App\Support\RuneFixtures;
use Illuminate\Database\Seeder;

class RuneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $runeData = RuneFixtures::getFixtures();

        $runeData->each(function (array $raw) {
            Rune::factory([
                'name' => $raw['name'],
                'advice' => $raw['advice'],
            ])->has(
                RuneCategory::factory()
                    ->count(3)
                    ->sequence(
                        [
                            'name' => RuneCategoryName::GENERAL->value,
                            'html' => $raw['cat1'],
                            'order' => 1,
                        ],
                        [
                            'name' => RuneCategoryName::RELATIONSHIP->value,
                            'html' => $raw['cat2'],
                            'order' => 2,
                        ],
                        [
                            'name' => RuneCategoryName::CAREER->value,
                            'html' => $raw['cat3'],
                            'order' => 3,
                        ],
                    ),
                'categories'
            )
                ->afterCreating(function ($rune) use ($raw) {
                    Image::factory()->create([
                        'imageable_id' => $rune,
                        'alt' => 'Иероглиф руны',
                        'path' => 'models/runes/' . $raw['front_image'],
                        'tiny_path' => 'models/runes/' . $raw['tiny_front_image'],
                        'type' => 'front'
                    ]);

                    Image::factory()->create([
                        'imageable_id' => $rune,
                        'alt' => 'Обратная сторона руны',
                        'path' => 'models/runes/' . $raw['back_image'],
                        'tiny_path' => 'models/runes/' . $raw['tiny_back_image'],
                        'type' => 'back'
                    ]);
                })
                ->create();
        });
    }
}
