<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\ExperienceItem;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('user/Decision/pages/Experience/Experience', [
            'items' => ExperienceItem::all()->toResourceCollection(),
        ]);
    }
}
