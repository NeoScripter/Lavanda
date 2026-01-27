<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Enums\MatchSetType;
use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Lenormand;
use App\Models\MatchSet;
use Illuminate\Support\Facades\Cache;
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
            'cards' => Cache::flexible(
                'lenormand',
                [5, 10],
                fn() => Gate::check('premium-access')
                    ? CardResource::collection(Lenormand::all()->shuffle())
                    : null
            ),
            'combos' => MatchSet::where('type', MatchSetType::LENORMAND)->get(),
        ]);
    }
}
