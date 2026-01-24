<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->merge([
            'birthday' => $request->birthday ?: null,
        ]);
        $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'nullable|in:male,female',
            'birthday' => 'nullable|date|before:today',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'policy' => 'required|accepted',
            'consent' => 'required|accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
        ]);

        event(new Registered($user));

        return back()->with(
            'message',
            'Добро пожаловать!'
        );
    }
}
