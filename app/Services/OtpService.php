<?php

namespace App\Services;

use App\Models\Otp;
use App\Models\User;
use App\Notifications\OtpNotification;

class OtpService
{
    public function generate(User $user): Otp
    {
        // Clean up old OTPs
        $user->otps()->delete();

        // Generate code
        $code = $this->generateCode();

        // Create OTP
        $otp = $user->otps()->create([
            'code' => $code,
            'expires_at' => now()->addMinutes(3),
        ]);

        // Send notification
        $user->notify(new OtpNotification($code));

        return $otp;
    }

    public function verify(User $user, string $code): bool
    {
        $otp = $user->otps()
            ->where('code', $code)
            ->first();

        if (! $otp || $otp->isExpired()) {
            $otp?->delete();

            return false;
        }

        $otp->delete();

        return true;
    }

    protected function generateCode(): string
    {
        return str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    }
}
