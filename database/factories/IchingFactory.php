<?php

namespace Database\Factories;

use App\Models\Iching;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Iching>
 */
class IchingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => fake()->sentences(25, true),
        ];
    }
}
