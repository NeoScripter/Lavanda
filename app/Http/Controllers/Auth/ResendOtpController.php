<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SendOtpRequest;
use App\Models\User;
use App\Services\OtpService;

class ResendOtpController extends Controller
{
    public function __construct(
        protected OtpService $otpService
    ) {}

    public function __invoke(SendOtpRequest $request)
    {
        $user = User::firstWhere('email', $request->email);

        $otp = $this->otpService->generate($user);

        return back()->with('code', [
            'email' => $request->email,
            'code' => app()->isLocal() ? $otp->code : null,
        ]);
    }
}
