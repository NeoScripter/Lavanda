<?php

namespace App\Providers;

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
        ]);
    }
}
