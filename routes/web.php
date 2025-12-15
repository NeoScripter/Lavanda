<?php

use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/account', AccountController::class)->middleware('auth')->name('account');


require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
