<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Models\Tarot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LenormandController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $items = [
            [
                'id' => 1,
                'preview' => 'man',
                'description' => 'Предсказание для мужчины',
            ],
            [
                'id' => 2,
                'preview' => 'woman',
                'description' => 'Предсказание для женщины',
            ],
        ];

        $cards = Tarot::all()->shuffle();

        return Inertia::render('user/Decision/pages/Cards/pages/Lenormand/Lenormand', [
            'items' => $items,
            'cards' => $cards,
        ]);
    }
}
