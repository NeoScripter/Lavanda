<?php

use App\Http\Controllers\User\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');


require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
