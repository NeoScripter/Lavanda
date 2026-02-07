<?php

namespace Database\Factories;

use App\Models\PracticeItemFaq;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PracticeItemFaq>
 */
class PracticeItemFaqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'question' => implode('', fake()->sentences(1)),
            'answer' => implode('', fake()->sentences(3)),
        ];
    }
}
