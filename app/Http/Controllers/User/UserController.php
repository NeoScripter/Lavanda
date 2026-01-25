<?php

namespace App\Http\Controllers\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Update the authenticated user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $user = Auth::user();

        // Convert empty birthday to null before validation
        $request->merge([
            'birthday' => $request->birthday ?: null,
        ]);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
            'gender' => 'nullable|in:male,female',
            'birthday' => 'nullable|date|before:today',
        ]);

        $user->update($validated);

        return back()->with('message', 'Профиль успешно обновлен!');
    }

    /**
     * Delete the authenticated user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = Auth::user();

        if ($user->role === UserRole::ADMIN) {
            abort('Аккаунт админа нельзя удалить');
        }

        // Log the user out
        Auth::logout();

        // Invalidate the session
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Delete the user
        $user->delete();

        return redirect()->route('home')->with('message', 'Ваш аккаунт был успешно удален.');
    }
}
