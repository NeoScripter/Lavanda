<?php

namespace App\Providers;

use App\Models\ExperienceItem;
use App\Models\Metaphoric;
use App\Models\MindGame;
use App\Models\PracticeItem;
use App\Models\Promo;
use App\Models\Rune;
use App\Models\Tarot;
use App\Models\WellnessTip;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Resources\Json\JsonResource;
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
        ]);
    }
}
