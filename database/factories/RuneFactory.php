<?php

namespace Database\Factories;

use App\Models\Rune;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Rune>
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
            'advice' => 'Совет: не пейте сырую воду, по утрам умывайтесь холодной водой, а также пейте молоко',
        ];
    }
}
