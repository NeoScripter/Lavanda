<?php

namespace Database\Seeders;

use App\Enums\LegalType;
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
            ['type' => LegalType::CONSENT->value],
            ['type' => LegalType::POLICY->value],
        )->create();
    }
}
