<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'durationInDays' => $this->durationInDays,
            'price' => $this->price,
            'perks' => $this->perks,
            'humanDuration' => $this->humanDuration,
        ];
    }
}
