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

        return Inertia::render('user/Decision/pages/MindGames/MindGames', [
            'cards' => Cache::flexible(
                'mind-game',
                [0, 10],
                fn () => Gate::check('premium-access')
                    ? MindGameResource::collection(MindGame::all()->shuffle())
                    : null
            ),
        ]);
    }
}
