<?php

namespace Database\Factories;

use App\Models\RuneCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<RuneCategory>
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
            'html' => fake()->sentences(8, true),
        ];
    }
}
