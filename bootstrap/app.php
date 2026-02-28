<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Schedule;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo('/');
        $middleware->validateCsrfTokens(except: [
            'prodamus/webhook',
        ]);
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ], prepend: []);
    })
    ->withSchedule(function (Schedule $schedule) {
        $schedule->command('app:send-subscription-expiry-reminder')
            ->dailyAt('09:00');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
