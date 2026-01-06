<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Metaphoric;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MetaphoricSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 30; $i++) {
            Metaphoric::factory()->afterCreating(function ($metaphoric) use ($i) {
                Image::factory()->create([
                    'imageable_id' => $metaphoric,
                    'path' => 'models/metaphoric/metaphoric-' . max($i % 4, 1) . '.webp',
                    'tiny_path' => 'models/metaphoric/metaphoric-' . max($i % 4, 1) . '-tiny.webp',
                    'type' => 'front'
                ]);
            })
                ->create();
        }
    }
}
