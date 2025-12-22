<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PracticeItem>
 */
class PracticeItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->word(3),
            'heading' => fake()->word(3),
            'description' => implode('', fake()->sentences(3)),
            'body' => implode('', fake()->sentences(3)),
        ];
    }
}
