<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request):Response $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $supportedLocales = ['en', 'ru'];

        $locale = Session::get('locale');

        if ($locale && in_array($locale, $supportedLocales)) {
            App::setLocale($locale);
        } else {
            $browserLocale = strtolower(substr((string) $request->getPreferredLanguage($supportedLocales), 0, 2));
            $locale = in_array($browserLocale, $supportedLocales)
                ? $browserLocale
                : config('app.locale');

            Session::put('locale', $locale);
            App::setLocale($locale);
        }


        return $next($request);
    }
}
