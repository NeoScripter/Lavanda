<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $activeUsers = User::query()->whereHas('subscription', fn($q) => $q
            ->where('ends_at', '>', now()))
            ->count();

        return Inertia::render('user/Home/Home', [
            'plans' => Cache::flexible(
                'plans',
                [60, 600],
                fn() =>
                Plan::query()->orderBy('price')
                    ->get()
                    ->toResourceCollection()
            ),
            'activeUsers' => $activeUsers,
        ]);
    }
}
