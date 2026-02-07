<?php

namespace Database\Factories;

use App\Models\ExperienceItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ExperienceItem>
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
            'title' => fake()->word(),
            'heading' => fake()->word(),
            'description' => fake()->sentence(4),
            'html' => fake()->sentence(7),
        ];
    }
}
