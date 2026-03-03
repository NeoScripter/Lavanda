<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Metaphoric;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class MetaphoricController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $cards = null;

        if (Gate::check('premium-access')) {
            $cards = Cache::flexible(
                'metaphoric',
                [5, 10],
                fn() => Metaphoric::all()
            );
            $cards = CardResource::collection($cards->shuffle());
        }
        return Inertia::render('user/Decision/pages/Cards/pages/Metaphoric/Metaphoric', [
            'cards' => $cards
        ]);
    }
}
