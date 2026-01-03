<?php

use App\Http\Controllers\Api\RuneCategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/rune-categories', RuneCategoryController::class);
