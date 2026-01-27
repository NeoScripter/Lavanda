<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

class IntegerArrayCast implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        $array = json_decode($value, true) ?? [];

        return array_map('intval', $array);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        if (!is_array($value)) {
            throw new InvalidArgumentException("The {$key} must be an array.");
        }

        $integers = [];
        foreach ($value as $item) {
            if (filter_var($item, FILTER_VALIDATE_INT) !== false) {
                $integers[] = (int) $item;
            } else {
                throw new InvalidArgumentException(
                    "Item '{$item}' in {$key} is not a valid integer."
                );
            }
        }

        return json_encode($integers);
    }
}
