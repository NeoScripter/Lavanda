<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            UserSeeder::class,
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
            IchingSeeder::class,
            AudioSeeder::class,
            AffirmationSeeder::class,
            LegalSeeder::class,
        ]);
    }
}
