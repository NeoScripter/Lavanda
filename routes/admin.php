<?php

use App\Http\Controllers\Admin\AppearanceController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'admin.translations'])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/settings/profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('/settings/password', [PasswordController::class, 'index'])->name('password');
    Route::get('/settings/appearance', AppearanceController::class)->name('appearance');
    Route::get('/settings/locale', [LocaleController::class, 'index'])->name('locale');
    Route::post('locale', [LocaleController::class, 'update'])->name('locale.update');
});
