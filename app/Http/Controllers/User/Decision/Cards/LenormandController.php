<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Lenormand;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class LenormandController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
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

        return Inertia::render('user/Decision/pages/Cards/pages/Lenormand/Lenormand', [
            'items' => $items,
            'cards' => Inertia::defer(
                fn() => Gate::check('premium-access')
                    ? fn() => CardResource::collection(Lenormand::all()->shuffle())
                    : null
            ),
        ]);
    }
}
