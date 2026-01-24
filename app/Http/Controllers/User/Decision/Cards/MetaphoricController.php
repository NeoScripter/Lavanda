<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Metaphoric;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class MetaphoricController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('user/Decision/pages/Cards/pages/Metaphoric/Metaphoric', [
            'cards' => Inertia::defer(
                fn() => Gate::check('premium-access')
                    ? fn() => CardResource::collection(Metaphoric::all()->shuffle())
                    : null
            ),
        ]);
    }
}
