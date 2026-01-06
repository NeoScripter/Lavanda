<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\MindGame;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MindGameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 80; $i++) {
                MindGame::factory()->afterCreating(function ($game) use ($i) {
                    Image::factory()->create([
                        'imageable_id' => $game,
                        'path' => 'models/mind-games/mind-game-' . $i . '.webp',
                        'tiny_path' => 'models/mind-games/mind-game-' . $i . '-tiny.webp',
                        'type' => 'front'
                    ]);
                })
                ->create();
        }
    }
}
