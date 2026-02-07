<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Promo;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class PromoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('user/Decision/pages/Cards/pages/Promo/Promo', [
            'cards' => Cache::flexible(
                'tarot',
                [5, 10],
                fn () => CardResource::collection(Promo::all()->shuffle())
            ),
        ]);
    }
}
