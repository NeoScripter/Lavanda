<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Rune;
use Illuminate\Database\Seeder;

class RuneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 48; $i++) {
            Rune::factory()
                ->afterCreating(function ($rune) use ($i) {
                    Image::factory()->create([
                        'imageable_id' => $rune,
                        'alt' => 'Иероглиф руны',
                        'path' => 'models/runes/rune-' . $i . '.webp',
                        'tiny_path' => 'models/runes/rune-' . $i . '-tiny.webp',
                    ]);
                })
                ->create();
        }
    }
}
