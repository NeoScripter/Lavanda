<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ExperienceItem>
 */
class ExperienceItemFactory extends Factory
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
            'heading' => fake()->word(5),
            'description' => fake()->sentence(4),
            'body' => fake()->sentence(7),
        ];
    }
}
