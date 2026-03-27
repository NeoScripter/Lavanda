<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Socialite;

class SocialiteController extends Controller
{
    public function __invoke(string $provider)
    {
        $socialUser = Socialite::driver($provider)->user();
        $column = $provider . '_id';

        $user = User::where('email', $socialUser->email)->first();
        if ($user) {
            $user->update([$column => $socialUser->id]);
        } else {
            $user = User::create([
                'name'    => $socialUser->name,
                'email'   => $socialUser->email,
                $column   => $socialUser->id,
            ]);
        }

        Auth::login($user);
        return redirect('/');
    }
}
