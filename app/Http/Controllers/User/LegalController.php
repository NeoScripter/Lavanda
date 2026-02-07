<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Legal;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class LegalController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Legal $legal)
    {
        return Inertia::render('user/Legal/Legal', [
            'legal' => Cache::flexible(
                $legal->type->value,
                [5, 10],
                fn (): JsonResource => $legal->toResource()
            ),
        ]);
    }
}
