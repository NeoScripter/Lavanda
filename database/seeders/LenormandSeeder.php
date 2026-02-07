<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Lenormand;
use Illuminate\Database\Seeder;

class LenormandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 35; $i++) {
            Lenormand::factory()->afterCreating(function ($lenormand) use ($i): void {
                Image::factory()->create([
                    'imageable_id' => $lenormand,
                    'path' => 'models/lenormand/lenormand-'.max($i % 4, 1).'.webp',
                    'tiny_path' => 'models/lenormand/lenormand-'.max($i % 4, 1).'-tiny.webp',
                    'type' => 'front',
                ]);
            })
                ->create();
        }
    }
}
