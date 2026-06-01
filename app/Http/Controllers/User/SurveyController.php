<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurveyController extends Controller
{
    public function index()
    {
        return Inertia::render('user/Survey/Survey');
    }

    public function store(Request $request)
    {
        // Validate data
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:10', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:200'],
            'birthday' => ['required', 'string', 'max:200'],
            'tool' => ['required', 'string', 'max:200'],
            'sphere' => ['required', 'string', 'max:200'],
            'description' => ['required', 'string', 'min:1', 'max:40000'],
        ]);


        // return redirect()->back();
        // Check if the user is logged in
        // if not, create a user
        // give them 24 hours of free access
        // log in the user
        // send an email to the admin
    }
}
