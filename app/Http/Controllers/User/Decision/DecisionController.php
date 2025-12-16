<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DecisionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('user/Decision/Decision');
    }
}
