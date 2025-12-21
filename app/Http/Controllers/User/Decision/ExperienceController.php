<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\ExperienceItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $items = ExperienceItem::limit(9)->get();

        return Inertia::render('user/Decision/pages/Experience/Experience', [
            'items' => $items
        ]);
    }
}
