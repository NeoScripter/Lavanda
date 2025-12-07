<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class LocaleController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('admin/Langugage', [
            'adminLayout' => true,
        ]);
    }

    public function update(Request $request)
    {
        $locale = $request->input('locale');

        $allowed = ['en', 'ru'];

        if (! in_array($locale, $allowed, true)) {
            $locale = 'en';
        }

        Session::put('locale', $locale);
        App::setLocale($locale);
        // dd(App::getLocale());
        // dd(Session::get('locale'));

        return Inertia::location(URL::previous());
    }
}
