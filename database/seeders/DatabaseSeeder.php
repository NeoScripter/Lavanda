<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@gmail.com',
        ]);

        $this->call([
            PlanSeeder::class,
            WellnessTipSeeder::class,
            ExperienceItemSeeder::class,
            PracticeItemSeeder::class,
            RuneSeeder::class,
            TarotSeeder::class,
            PromoSeeder::class,
            MetaphoricSeeder::class,
            MindGameSeeder::class,
            LenormandSeeder::class,
        ]);
    }
}
