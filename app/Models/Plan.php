<?php

namespace App\Models;

use Illuminate\Support\Facades\Date;
use Database\Factories\PlanFactory;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Plan extends Model
{
    /** @use HasFactory<PlanFactory> */
    use HasFactory;

    protected $casts = [
        'perks' => 'array',
    ];

    protected function humanDuration(): Attribute
    {
        return Attribute::make(
            get: function (): string {
                $duration = Date::now()
                    ->locale('ru')
                    ->addDays($this->duration_in_days + 2)
                    ->diffForHumans([
                        'syntax' => Carbon::DIFF_RELATIVE_AUTO,
                        'parts' => 1,
                    ]);

                return implode(" ", array_slice(explode(' ', $duration), 1));
            }
        )->shouldCache();
    }
}
