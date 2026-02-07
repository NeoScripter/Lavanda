<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Tarot;
use Illuminate\Database\Seeder;

class TarotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 30; $i++) {
            Tarot::factory()->afterCreating(function ($tarot) use ($i): void {
                Image::factory()->create([
                    'imageable_id' => $tarot,
                    'path' => 'models/tarot/tarot-'.max($i % 4, 1).'.webp',
                    'tiny_path' => 'models/tarot/tarot-'.max($i % 4, 1).'-tiny.webp',
                    'type' => 'front',
                ]);
            })
                ->create();
        }
    }
}
