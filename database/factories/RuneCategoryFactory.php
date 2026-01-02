<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RuneCategory>
 */
class RuneCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => fake()->sentences(8, true),
            'advice' => 'Совет: не пейте сырую воду, по утрам умывайтесь холодной водой, а также пейте молоко',
        ];
    }
}
