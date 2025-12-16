<?php

namespace App\Http\Controllers\User\Sadness;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SadnessController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('user/Sadness/Sadness');
    }
}
