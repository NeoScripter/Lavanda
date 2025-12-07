<?php

use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Home');
})->name('home');


require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
