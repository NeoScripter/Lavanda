<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\SubscriptionExpiryNotification;
use Illuminate\Console\Command;

class SendSubscriptionExpiryReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-subscription-expiry-reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a reminder to paid users to extend their subscription';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $windowStart = now()->addHour();
        $windowEnd = now()->addHour()->addMinutes(15);

        User::whereHas('subscription', function ($q) use ($windowStart, $windowEnd) {
            $q->where('ends_at', '>=', $windowStart)
                ->where('ends_at', '<', $windowEnd);
        })
            ->chunkById(100, function ($users) {
                foreach ($users as $user) {
                    $user->notify(new SubscriptionExpiryNotification());
                }
            });
    }
}
