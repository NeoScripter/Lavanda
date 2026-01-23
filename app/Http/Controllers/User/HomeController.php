<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('user/Home/Home', [
            'plans' => Cache::flexible(
                'plans',
                [60, 600],
                fn() =>
                Plan::orderBy('price')
                    ->get()
                    ->toResourceCollection()
            )
        ]);
    }
}
