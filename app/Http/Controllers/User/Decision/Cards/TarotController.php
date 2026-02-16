<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\Tarot;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class TarotController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $items = [
            [
                'id' => 1,
                'title' => '1 карта',
                'description' => 'Простая и быстрая практика. Карта подскажет, на что обратить внимание прямо сейчас — какое настроение, мысль или энергия сопровождает вас сегодня.',
            ],
            [
                'id' => 3,
                'title' => '3 карты',
                'description' => 'Расклад, который помогает понять динамику происходящего: что уже позади, что важно сейчас и куда направлено развитие ситуации.',
            ],
            [
                'id' => 5,
                'title' => '5 карт',
                'description' => 'Более глубокий взгляд. Этот расклад показывает, как внутренние и внешние силы влияют на вас, и что поможет действовать с уверенностью и спокойствием.',
            ],
        ];

        return Inertia::render('user/Decision/pages/Cards/pages/Tarot/Tarot', [
            'items' => $items,
            'cards' => Cache::flexible(
                'tarot',
                [5, 10],
                fn () => Gate::check('premium-access')
                    ? CardResource::collection(Tarot::all()->shuffle())
                    : null
            ),
        ]);
    }
}
