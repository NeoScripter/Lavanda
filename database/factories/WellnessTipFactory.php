<?php

namespace Database\Factories;

use App\Models\WellnessTip;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<WellnessTip>
 */
class WellnessTipFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url' => fake()->url(),
            'description' => fake()->sentence(2),
        ];
    }
}
