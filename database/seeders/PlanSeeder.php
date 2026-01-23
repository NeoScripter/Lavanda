<?php

namespace Database\Seeders;

use App\Enums\PlanTier;
use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plan::create([
            'title' => 'Базовый',
            'tier' => PlanTier::BASE->value,
            'duration_in_days' => 7,
            'price' => 590,
            'perks' => [
                'Доступ ко всем разделам без ограничений в течение 7 дней',
                'Для тех, кто хочет попробовать и почувствовать атмосферу проекта.',
            ],
        ]);

        Plan::create([
            'title' => 'Стандарт',
            'tier' => PlanTier::STANDARD->value,
            'duration_in_days' => 30,
            'price' => 1590,
            'perks' => [
                'Доступ ко всем разделам без ограничений в течние 30 дней',
                'Подборка полезных ресурсов для расслабления и вдохновения',
                'Возможность диалога с автором (короткие личные сообщения)',
            ],
        ]);

        Plan::create([
            'title' => 'Профи',
            'tier' => PlanTier::PROFI->value,
            'duration_in_days' => 365,
            'price' => 5990,
            'perks' => [
                'Доступ ко всем разделам без ограничений в течние 1 года',
                'Эксклюзивные материалы от автора (опыт, практики, статьи)',
                'Приоритетные ответы в диалоге с автором',
            ],
        ]);
    }
}
