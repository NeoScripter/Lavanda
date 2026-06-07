<?php

namespace App\Http\Controllers\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\User;
use App\Notifications\ReviewNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();

            if ($user->review()->exists()) {
                return redirect(route('home'));
            }
        } else {
            return redirect(route('home'))->with('login', ['login' => 'open']);
        }
        return Inertia::render('user/Review/Review');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => ['required', 'string', 'min:10', 'max:40000'],
        ]);

        $user = Auth::user();

        if ($user->review()->exists()) {
            return back()->withErrors(['name' => 'Ваш отзыв уже получен']);
        }

        $validated['name'] = $user->name;
        $validated['email'] = $user->email;

        $admin = User::where('role', UserRole::ADMIN->value)->first();
        $review = json_decode(json_encode($validated), FALSE);

        $admin->notify(new ReviewNotification($review));

        Review::create(['user_id' => $user->id, 'content' => $validated['description']]);

        return redirect(route('home'));
    }
}
