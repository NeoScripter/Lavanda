<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IchingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {

        return Inertia::render('user/Decision/pages/Iching/Iching');
    }
}
