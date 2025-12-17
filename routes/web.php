<?php

use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\Decision\DecisionController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\RelaxationController;
use App\Http\Controllers\User\Sadness\SadnessController;
use App\Http\Controllers\User\ToolkitController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/account', AccountController::class)->middleware('auth')->name('account');

Route::prefix('/decision')->name('decision.')->group(function () {
    Route::get('/', DecisionController::class)->name('index'); // решение
    // Route::get('/practice', ...)->name('practice');// практика
    // Route::get('/experience', ...)->name('experience'); // опыт автора
    // Route::get('/runes', ...)->name('runes');// руны
    // Route::get('/readings', ...)->name('readings'); // расклад карт
    // Route::get('/iching', ...)->name('iching'); // книга перемен
    // Route::get('/games', ...)->name('games'); // игры разума
});
Route::prefix('/sadness')->name('sadness.')->group(function () {
    Route::get('/', SadnessController::class)->name('index'); // мне грустно
});

Route::get('/relaxation', RelaxationController::class)->name('relaxation');
Route::get('/toolkit', ToolkitController::class)->name('toolkit');


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
