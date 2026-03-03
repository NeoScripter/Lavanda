<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Http\Resources\MindGameResource;
use App\Models\MindGame;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class MindGameController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {

        $cards = null;

        if (Gate::check('premium-access')) {
            $cards = Cache::flexible(
                'mind-games',
                [5, 10],
                fn() => MindGame::all()
            );
            $cards = MindGameResource::collection($cards->shuffle());
        }

        return Inertia::render('user/Decision/pages/MindGames/MindGames', [
            'cards' => $cards
        ]);
    }
}
