<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('user/FAQs/FAQs');
    }
}
