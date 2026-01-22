<?php

namespace Database\Seeders;

use App\Models\Legal;
use Illuminate\Database\Seeder;

class LegalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Legal::factory()->count(2)->sequence(
            ['type' => 'consent'],
            ['type' => 'policy'],
        )->create();
    }
}
