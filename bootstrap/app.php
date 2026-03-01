<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

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
    ->withSchedule(function ($schedule) {
        $schedule->command('app:send-subscription-expiry-reminder')
            ->dailyAt('09:00');
        $schedule->command('backup:clean')->weeklyOn(1, '1:00');
        $schedule->command('backup:run')->weeklyOn(1, '1:30');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
