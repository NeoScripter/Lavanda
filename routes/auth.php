<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\ResendOtpController;
use App\Http\Controllers\Auth\SendOtpController;
use App\Http\Controllers\Auth\VerifyOtpController;
use Illuminate\Support\Facades\Route;


Route::middleware(['guest', 'admin.translations'])->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'index'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('authenticate');
    Route::post('/signup', [RegisteredUserController::class, 'store'])->name('signup');
});

// Route::middleware(['auth'])->group(function () {
//     Route::get('/email/verify', [EmailVerificationController::class, 'create'])
//         ->name('verification.notice');

//     Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'show'])
//         ->middleware(['signed'])
//         ->name('verification.verify');

//     Route::post('/email/verification-notification', [EmailVerificationController::class, 'update'])
//         ->middleware(['throttle:6,1'])
//         ->name('verification.send');
// });

Route::middleware(['auth', 'admin.translations'])->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('settings/password', [PasswordController::class, 'update'])->name('password.update');
});


Route::prefix('/otp')->group(function () {
    Route::post('/send', SendOtpController::class)
        ->middleware('throttle:otp-send')
        ->name('otp.send');

    Route::post('/verify', VerifyOtpController::class)
        ->middleware('throttle:otp-verify')
        ->name('otp.verify');

    Route::post('/resend', ResendOtpController::class)
        ->middleware('throttle:otp-resend')
        ->name('otp.resend');
});
