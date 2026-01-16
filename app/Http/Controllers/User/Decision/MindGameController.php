<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Http\Resources\CardResource;
use App\Models\MindGame;
use Inertia\Inertia;

class MindGameController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {

        return Inertia::render('user/Decision/pages/MindGames/MindGames', [
            'cards' => Inertia::defer(fn() => CardResource::collection(MindGame::all()->shuffle())),
        ]);
    }
}
