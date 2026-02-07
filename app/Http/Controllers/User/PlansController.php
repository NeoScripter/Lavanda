<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\User;
use Inertia\Inertia;

class PlansController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $plans = Plan::query()->orderBy('price')
            ->get()
            ->toResourceCollection();

        $activeUsers = User::query()->whereHas('subscription', fn($q) =>$q
            ->where('ends_at', '>', now()))
            ->count();

        return Inertia::render('user/Plans/Plans', [
            'plans' => $plans,
            'activeUsers' => $activeUsers,
        ]);
    }

    public function show(Plan $plan)
    {
        return Inertia::render('user/Plan/Plan', [
            'plan' => $plan
        ]);
    }
}
