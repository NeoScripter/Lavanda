<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Promo;
use Inertia\Inertia;

class PromoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {

        return Inertia::render('user/Decision/pages/Cards/pages/Promo/Promo', [
            'cards' => Inertia::defer(fn() => CardResource::collection(Promo::all()->shuffle())),
        ]);
    }
}
