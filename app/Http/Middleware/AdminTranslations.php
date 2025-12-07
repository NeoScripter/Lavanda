<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class AdminTranslations
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        Inertia::share('translations', fn() => json_decode(file_get_contents(base_path("resources/js/lang/" . app()
            ->getLocale() . ".json")), true));

        return $next($request);
    }
}
