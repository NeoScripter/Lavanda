<?php

namespace App\Providers;

use App\Enums\UserRole;
use App\Models\ExperienceItem;
use App\Models\Lenormand;
use App\Models\Metaphoric;
use App\Models\MindGame;
use App\Models\PracticeItem;
use App\Models\Promo;
use App\Models\Rune;
use App\Models\Tarot;
use App\Models\WellnessTip;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::unguard();

        JsonResource::withoutWrapping();

        Relation::enforceMorphMap([
            'wellnessTip' => WellnessTip::class,
            'experienceItem' => ExperienceItem::class,
            'practiceItem' => PracticeItem::class,
            'rune' => Rune::class,
            'tarot' => Tarot::class,
            'metaphoric' => Metaphoric::class,
            'promo' => Promo::class,
            'mindGame' => MindGame::class,
            'lenormand' => Lenormand::class,
        ]);

        Gate::define('premium-access', function ($user) {
            return $user->hasActiveSubscription() || $user->role === UserRole::ADMIN;
        });

        RateLimiter::for('otp-send', function (Request $request) {
            return Limit::perMinute(3)
                ->by(strtolower($request->input('email') ?? 'guest') . '|send');
        });

        RateLimiter::for('otp-verify', function (Request $request) {
            return Limit::perMinute(3)
                ->by(strtolower($request->input('email') ?? 'guest') . '|verify');
        });

        RateLimiter::for('otp-resend', function (Request $request) {
            return Limit::perMinute(3)
                ->by(strtolower($request->input('email') ?? 'guest') . '|resend');
        });
    }
}
