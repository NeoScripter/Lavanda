<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $exemptRoutes = ['promo'];

        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->pull('message'),
                'code' => fn () => $request->session()->pull('code'),
            ],
            'auth' => [
                'user' => $request->user(...),
                'hasPremiumAccess' => in_array($request->route()?->getName(), $exemptRoutes, true)
                    || Cache::flexible(
                        'premium-access',
                        [5, 10],
                        fn () => Gate::check('premium-access')
                    ),
            ],
            'locale' => fn () => App::getLocale(),
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

        ];
    }
}
