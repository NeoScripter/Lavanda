<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlansController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $plans = Plan::public()->orderBy('price')->get();

        return Inertia::render('user/Plans/Plans', [
            'plans' => $plans
        ]);
    }
}
