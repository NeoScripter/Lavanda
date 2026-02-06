<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class PracticeItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $isMember = Gate::check('premium-access');

        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'description' => $this->description,
            'heading' => $this->heading,
            'faqs' => $this->when($isMember, $this->faqs),
            'image' => $this->when($isMember, $this->image),
        ];
    }
}
