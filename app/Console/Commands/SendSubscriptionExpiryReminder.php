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
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $targetDate = now()->addWeek()->toDateString();

        User::whereHas('subscription', function ($q) use ($targetDate) {
            $q->whereDate('ends_at', $targetDate);
        })
            ->chunkById(100, function ($users) {
                foreach ($users as $user) {
                    $user->notify(new SubscriptionExpiryNotification());
                }
            });
    }
}
