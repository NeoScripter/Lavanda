<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Inertia\Inertia;

class PlansController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $plans = Plan::orderBy('price')
            ->get()
            ->toResourceCollection();

        return Inertia::render('user/Plans/Plans', [
            'plans' => $plans
        ]);
    }

    public function show(Plan $plan)
    {
        return Inertia::render('user/Plan/Plan', [
            'plan' => $plan
        ]);
    }
}
