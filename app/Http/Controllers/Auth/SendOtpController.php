<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SendOtpRequest;
use App\Models\User;
use App\Services\OtpService;
use Illuminate\Support\Facades\Log;

class SendOtpController extends Controller
{
    public function __construct(
        protected OtpService $otpService
    ) {}

    public function __invoke(SendOtpRequest $request)
    {
        $user = User::query()->firstWhere('email', $request->email);

        Log::debug('User data', ['user' => $user]);

        $this->otpService->generate($user);

        Log::debug('email has been sent');

        return back()->with('code', [
            'email' => $request->email,
        ]);
    }
}
