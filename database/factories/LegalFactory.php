<?php

namespace Database\Factories;

use App\Models\Legal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Legal>
 */
class LegalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'html' => 'Hello world'
        ];
    }
}
