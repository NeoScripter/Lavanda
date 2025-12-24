<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RunesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('user/Decision/pages/Runes/Runes');
    }
}
