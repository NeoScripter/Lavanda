<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Legal;
use Inertia\Inertia;

class LegalController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Legal $legal)
    {
        return Inertia::render('user/Legal/Legal', [
            'legal' => $legal->toResource()
        ]);
    }
}
