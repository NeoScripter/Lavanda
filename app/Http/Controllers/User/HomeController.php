<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Carbon\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $plans = Plan::public()->orderBy('price')->get();

        return Inertia::render('Home/Home', [
            'plans' => $plans
        ]);
    }
}
