<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Affirmation>
 */
class AffirmationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quote' => fake()->sentence(),
            'type' => fake()->randomElement(['карьера, бизнес', 'отношения', 'гармония', 'мама и малыш']),
        ];
    }
}
