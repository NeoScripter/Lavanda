<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SupportController extends Controller
{
    public function __invoke() {

        return Inertia::render('user/Support/Support');
    }
}
