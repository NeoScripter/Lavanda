<?php

namespace Database\Factories;

use App\Models\Audio;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Audio>
 */
class AudioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'intro' => fake()->sentences(3, true),
            'path' => 'models/audios/example.mp3',
        ];
    }
}
