<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\PracticeItem;
use App\Models\PracticeItemFaq;
use Illuminate\Database\Seeder;

class PracticeItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PracticeItem::factory()
            ->count(10)
            ->afterCreating(function ($item) {
                Image::factory()->create([
                    'imageable_id' => $item,
                    'path' => 'models/practice-items/item.webp',
                    'tiny_path' => 'models/practice-items/item-tiny.webp',
                ]);

                PracticeItemFaq::factory()
                    ->count(6)
                    ->create(['practice_item_id' => $item->id]);
            })
            ->create();
    }
}
