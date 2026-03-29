<?php

namespace App\Http\Middleware;

use App\Enums\SubscriptionEventName;
use App\Enums\UserRole;
use App\Models\SubscriptionEvent;
use App\Models\User;
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

        $user = $request->user()?->load('subscription');

        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn() => $request->session()->pull('message'),
                'code' => fn() => $request->session()->pull('code'),
            ],
            'auth' => [
                'user' => $user,
                'subEvent' => $this->handleUserNotificationUpdate($user),
                'hasPremiumAccess' => in_array($request->route()?->getName(), $exemptRoutes, true)
                    || Cache::flexible(
                        'premium-access',
                        [1, 2],
                        fn() => Gate::check('premium-access')
                    ),
            ],
            'locale' => fn() => App::getLocale(),
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

        ];
    }

    private function handleUserNotificationUpdate(User | null $user)
    {
        if (! $user) {
            return null;
        }

        if ($user->role === UserRole::ADMIN) {
            return null;
        }

        if (! $user->subscription()->exists()) {
            return null;
        }

        $subscription = $user->subscription;
        $events = $subscription->events;

        if (empty($events)) {
            return null;
        }

        $events = $events->toArray();

        $cases = SubscriptionEventName::cases();

        usort(
            $cases,
            fn($en1, $en2) => $en1->value <=> $en2->value
        );

        foreach ($cases as $case) {
            $event = array_find($events,
                fn($event) => $event['name'] === $case->value
            );

            if (! $event) {
                continue;
            }

            if ($event['is_notified']) {
                continue;
            }

            $should_notify = match ($event['name']) {
                SubscriptionEventName::PURCHASE->value => $subscription->ends_at > now(),
                SubscriptionEventName::EXPIRES_SOON->value => $subscription->ends_at < now()->addHour() && $subscription->ends_at > now(),
                SubscriptionEventName::EXPIRED->value => $subscription->ends_at < now(),
            };

            if ($should_notify) {
                SubscriptionEvent::find($event['id'])?->update(['is_notified' => true]);
                return $case->getLabel();
            }
        }

        return null;
    }
}
