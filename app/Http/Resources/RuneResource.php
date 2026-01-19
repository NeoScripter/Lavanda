<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RuneResource extends JsonResource
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
            'name' => $this->name,
            'advice' => $this->advice,
            'front_image' => new ImageResource($this->whenLoaded('frontImage')),
            'back_image' => new ImageResource($this->whenLoaded('backImage')),
            'categories' => RuneCategoryResource::collection($this->whenLoaded('categories')),
        ];
    }
}
