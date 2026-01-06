<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\MindGame;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MindGameController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $cards = MindGame::all()->shuffle();

        return Inertia::render('user/Decision/pages/MindGames/MindGames', [
            'cards' => $cards,
        ]);
    }
}
