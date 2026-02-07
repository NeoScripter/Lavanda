<?php

namespace Database\Factories;

use App\Models\PracticeItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PracticeItem>
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
            'title' => fake()->word(),
            'heading' => fake()->word(),
            'description' => implode('', fake()->sentences(3)),
            'body' => implode('', fake()->sentences(3)),
        ];
    }
}
