<?php

namespace Database\Factories;

use App\Models\WellnessTip;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'path' => fake()->url(),
            'tiny_path' => fake()->url(),
            'alt' => fake()->sentence(6),
            'imageable_type' => $this->imageableType(...),
            'imageable_id' => WellnessTip::factory(),
        ];
    }

    protected function imageableType(array $values)
    {
        $type = $values['imageable_id'];
        $modelName = $type instanceof Factory ? $type->modelName() : $type::class;

        return (new $modelName)->getMorphClass();
    }
}
