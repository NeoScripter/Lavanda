<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\VerifyOtpRequest;
use App\Models\User;
use App\Services\OtpService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\ValidationException;

class VerifyOtpController extends Controller
{
    public function __construct(
        protected OtpService $otpService
    ) {}

    public function __invoke(VerifyOtpRequest $request): RedirectResponse
    {
        $user = User::query()->firstWhere('email', $request->email);

        if (! $this->otpService->verify($user, $request->code)) {
            throw ValidationException::withMessages([
                'code' => 'Данный код недействителен.',
            ]);
        }

        Auth::login($user);
        $request->session()->regenerate();
        Cache::delete('premium-access');

        return back();
    }
}
