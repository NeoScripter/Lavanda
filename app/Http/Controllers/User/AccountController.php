<?php

namespace App\Http\Controllers\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $user = Auth::user();

        // if ($user->role === UserRole::ADMIN) {
        //     return redirect()->route('home');
        // }

        $user = Auth::user();
        $user->load(['subscription']);

        return Inertia::render('user/Account/Account', [
            'user' => $user,
        ]);
    }
}
