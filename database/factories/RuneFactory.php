<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rune>
 */
class RuneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Руна Лагус (Laguz)',
            'description' => implode('', fake()->sentences(8)),
            'summary' => implode('', fake()->sentences(2)),
            'advice' => 'Совет: не пейте сырую воду, по утрам умывайтесь холодной водой, а также пейте молоко',
        ];
    }
}
