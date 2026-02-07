<?php

namespace Database\Factories;

use App\Models\Lenormand;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Lenormand>
 */
class LenormandFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'advice' => fake()->sentence(),
            'html' => fake()->sentences(10, true),
        ];
    }
}
