<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Promo;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 30; $i++) {
                Promo::factory()->afterCreating(function ($promo) use ($i): void {
                    Image::factory()->create([
                        'imageable_id' => $promo,
                        'path' => 'models/promo/promo-' . max($i % 4, 1) . '.webp',
                        'tiny_path' => 'models/promo/promo-' . max($i % 4, 1) . '-tiny.webp',
                        'type' => 'front'
                    ]);
                })
                ->create();
        }
    }
}
