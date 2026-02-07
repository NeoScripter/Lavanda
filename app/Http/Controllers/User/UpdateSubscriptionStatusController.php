<?php

namespace App\Http\Controllers\User;

use App\Enums\SubscriptionStatus;
use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class UpdateSubscriptionStatusController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Subscription $subscription, Request $request): RedirectResponse
    {
        $this->authorize('update', $subscription);

        $subscription->update([
            'status' => $subscription->status === SubscriptionStatus::ACTIVE
                ? SubscriptionStatus::CANCELLED
                : SubscriptionStatus::ACTIVE,
        ]);

        return back();
    }
}
