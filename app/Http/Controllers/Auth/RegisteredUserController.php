<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Models\User;
use App\Services\OtpService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RegisteredUserController extends Controller
{
    public function __construct(
        protected OtpService $otpService
    ) {}

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisteredUserRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'gender' => $validated['gender'],
            'birthday' => $validated['birthday'],
        ]);

        event(new Registered($user));

        $otp = $this->otpService->generate($user);

        return back()->with('code', [
            'email' => $request->email,
            'code' => app()->isLocal() ? $otp->code : null,
        ]);
    }
}
