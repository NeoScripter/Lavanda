<?php

namespace Database\Factories;

use App\Models\Affirmation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Affirmation>
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
