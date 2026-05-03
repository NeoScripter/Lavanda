<?php

use App\Models\User;
use App\Models\Subscription;
use App\Notifications\SubscriptionExpiryNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Carbon;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

beforeEach(function () {
    Notification::fake();
    Carbon::setTestNow(now());
});

function createUserWithSubscription(array $attributes): User
{
    $user = User::factory()->create();
    Subscription::factory()->create(array_merge(['user_id' => $user->id], $attributes));
    return $user;
}

it('notifies users whose subscription expires within the next hour', function () {
    $user = createUserWithSubscription(['ends_at' => now()->addMinutes(67)]);

    $this->artisan('app:send-subscription-expiry-reminder');

    Notification::assertSentTo($user, SubscriptionExpiryNotification::class);
});

it('does not notify users whose subscription expires in more than one hour and fifteen minutes', function () {
    $user = createUserWithSubscription(['ends_at' => now()->addMinutes(90)]);

    $this->artisan('app:send-subscription-expiry-reminder');

    Notification::assertNotSentTo($user, SubscriptionExpiryNotification::class);
});

it('does not notify users whose subscription has already expired', function () {
    $user = createUserWithSubscription(['ends_at' => now()->subMinutes(30)]);

    $this->artisan('app:send-subscription-expiry-reminder');

    Notification::assertNotSentTo($user, SubscriptionExpiryNotification::class);
});

it('does not notify users whose subscription expires in less than one hour', function () {
    $user = createUserWithSubscription(['ends_at' => now()->addMinutes(45)]);

    $this->artisan('app:send-subscription-expiry-reminder');

    Notification::assertNotSentTo($user, SubscriptionExpiryNotification::class);
});

it('only notifies users within the window and not others', function () {
    $inWindow = createUserWithSubscription(['ends_at' => now()->addMinutes(65)]);
    $tooSoon  = createUserWithSubscription(['ends_at' => now()->addMinutes(30)]);
    $tooLate  = createUserWithSubscription(['ends_at' => now()->addMinutes(120)]);
    $expired  = createUserWithSubscription(['ends_at' => now()->subHour()]);

    $this->artisan('app:send-subscription-expiry-reminder');

    Notification::assertSentTo($inWindow, SubscriptionExpiryNotification::class);
    Notification::assertNotSentTo($tooSoon,  SubscriptionExpiryNotification::class);
    Notification::assertNotSentTo($tooLate,  SubscriptionExpiryNotification::class);
    Notification::assertNotSentTo($expired,  SubscriptionExpiryNotification::class);
});

it('handles no expiring subscriptions gracefully', function () {
    $this->artisan('app:send-subscription-expiry-reminder')->assertSuccessful();

    Notification::assertNothingSent();
});
