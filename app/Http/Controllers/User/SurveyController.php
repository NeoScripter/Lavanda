<?php

namespace App\Http\Controllers\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Models\Subscription;
use App\Models\Survey;
use App\Models\User;
use App\Notifications\FreeAccessNotification;
use App\Notifications\SurveyNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class SurveyController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();

            if ($user->survey()->exists()) {
                return redirect(route('home'));
            }
        }
        return Inertia::render('user/Survey/Survey');
    }

    public function store(Request $request)
    {
        // Validate data
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:1', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:200'],
            'birthday' => ['required', 'string', 'max:200'],
            'tool' => ['required', 'string', 'max:200'],
            'sphere' => ['required', 'string', 'max:200'],
            'gender' => ['required', 'string', 'max:200', Rule::in(['Мужчина', 'Женщина'])],
            'description' => ['required', 'string', 'min:1', 'max:40000'],
        ]);

        // Check if the user is logged in
        if (! Auth::check()) {
            // if not, create a user
            if (! User::where('email', $validated['email'])->exists()) {
                $user = User::query()->create([
                    'name' => $validated['name'],
                    'email' => $validated['email'],
                    'birthday' => $validated['birthday'],
                    'gender' => $validated['gender'],
                ]);
            } else {
                $user = User::where('email', $validated['email'])->first();
            }

            // if the user doesn't have a subscription, assign it to them
            if (!$user->subscription) {
                Subscription::create([
                    'user_id' => $user->id,
                    'title' => 'Доступ на 24 часа',
                    'starts_at' => now(),
                    'ends_at' => now()->addDay(),
                ]);
            } else {
                // Extend existing subscription
                $subscription = $user->subscription;

                $endsAt = $subscription->ends_at instanceof Carbon
                    ? $subscription->ends_at
                    : Carbon::parse($subscription->ends_at);

                // If subscription already expired, start from now
                if ($endsAt->isPast()) {
                    $subscription->ends_at = now()->addDay();
                } else {
                    // Otherwise extend from current end date
                    $subscription->ends_at = $endsAt->addDay();
                }

                $subscription->save();

                $subscription->events()->each(
                    fn($event) => $event->update(['is_notified' => false])
                );
            }
        } else {
            $user = Auth::user();
        }

        if ($user->survey()->exists()) {
            return back()->withErrors(['name' => 'Вы уже проходили опрос и ваши ответы уже получены.']);
        }

        // log in the user
        Auth::login($user);

        $admin = User::where('role', UserRole::ADMIN->value)->first();
        $survey = json_decode(json_encode($validated), FALSE);

        $admin->notify(new SurveyNotification($survey));
        $user->notify(new FreeAccessNotification());

        Survey::create(['user_id' => $user->id, 'is_taken' => true]);
        // redirect to the home page
        return redirect(route('home'));
    }
}
