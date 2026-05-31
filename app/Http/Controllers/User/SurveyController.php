<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SurveyController extends Controller
{
    public function index()
    {
        return Inertia::render('user/Survey/Survey');
    }

    // public function store()
    // {
    //     return Inertia::render('user/Survey/Survey');
    // }
}
