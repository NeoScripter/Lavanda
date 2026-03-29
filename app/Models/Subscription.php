<?php

namespace App\Models;

use App\Enums\SubscriptionEventName;
use App\Enums\SubscriptionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subscription extends Model
{
    use HasFactory;

    protected $with = ['events'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function events(): HasMany
    {
        return $this->hasMany(SubscriptionEvent::class);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'status' => SubscriptionStatus::class,
        ];
    }

    protected static function booted()
    {
        static::created(function ($model): void {
            $model->events()->createMany([
                ['name' => SubscriptionEventName::EXPIRED->value],
                ['name' => SubscriptionEventName::EXPIRES_SOON->value],
                ['name' => SubscriptionEventName::PURCHASE->value],
            ]);
        });
    }
}
