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
use Illuminate\Support\Facades\DB;
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
        $this->configureCommands();
        $this->configureModels();
        $this->configureResponses();
        $this->configureMorphMap();
        $this->configureGates();
        $this->configureRateLimiting();
    }

    private function configureCommands(): void
    {
        DB::prohibitDestructiveCommands(

            $this->app->isProduction()
        );
    }

    private function configureModels(): void
    {
        Model::shouldBeStrict();
        Model::unguard();
    }

    private function configureResponses(): void
    {
        JsonResource::withoutWrapping();
    }

    private function configureMorphMap(): void
    {
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
    }

    private function configureGates(): void
    {
        Gate::define('premium-access', function ($user): bool {
            if ($user->hasActiveSubscription()) {
                return true;
            }
            return $user->role === UserRole::ADMIN;
        });
    }

    private function configureRateLimiting(): void
    {
        RateLimiter::for('otp-send', fn(Request $request) => Limit::perMinute(3)
            ->by(strtolower($request->input('email') ?? 'guest') . '|send'));

        RateLimiter::for('otp-verify', fn(Request $request) => Limit::perMinute(3)
            ->by(strtolower($request->input('email') ?? 'guest') . '|verify'));

        RateLimiter::for('otp-resend', fn(Request $request) => Limit::perMinute(3)
            ->by(strtolower($request->input('email') ?? 'guest') . '|resend'));
    }
}
