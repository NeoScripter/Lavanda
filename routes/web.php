<?php

use App\Http\Controllers\User\AboutController;
use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\ContactPageController;
use App\Http\Controllers\User\Decision\CardController;
use App\Http\Controllers\User\Decision\DecisionController;
use App\Http\Controllers\User\Decision\ExperienceController;
use App\Http\Controllers\User\Decision\PracticeController;
use App\Http\Controllers\User\Decision\RunesController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\PlansController;
use App\Http\Controllers\User\RelaxationController;
use App\Http\Controllers\User\Sadness\SadnessController;
use App\Http\Controllers\User\ToolkitController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/account', AccountController::class)->middleware('auth')->name('account');
Route::get('/plans', PlansController::class)->name('plans');
Route::get('/about', AboutController::class)->name('about');
Route::get('/contacts', ContactPageController::class)->name('contacts');

Route::prefix('/decision')->name('decision.')->group(function () {
    Route::get('/', DecisionController::class)->name('index'); // решение
    Route::get('/practice', PracticeController::class)->name('practice'); // практика
    Route::get('/experience', ExperienceController::class)->name('experience'); // опыт автора
    Route::get('/runes', RunesController::class)->name('runes'); // руны

    Route::prefix('/cards')->name('cards.')->group(function () {
        Route::get('/', CardController::class)->name('index'); // руны
        Route::get('/tarot', CardController::class)->name('tarot'); // таро
    }); // карты
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
