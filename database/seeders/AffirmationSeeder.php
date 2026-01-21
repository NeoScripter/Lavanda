<?php

namespace Database\Seeders;

use App\Models\Affirmation;
use Illuminate\Database\Seeder;

class AffirmationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Affirmation::factory(40)->create();
    }
}
