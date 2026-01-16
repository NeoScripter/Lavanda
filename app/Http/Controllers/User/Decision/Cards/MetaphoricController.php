<?php

namespace App\Http\Controllers\User\Decision\Cards;

use App\Http\Controllers\Controller;
use App\Models\Metaphoric;
use App\Models\Tarot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MetaphoricController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('user/Decision/pages/Cards/pages/Metaphoric/Metaphoric', [
            'cards' => Inertia::defer(fn() => Metaphoric::all()->shuffle()),
        ]);
    }
}
