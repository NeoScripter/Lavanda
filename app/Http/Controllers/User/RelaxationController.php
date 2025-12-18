<?php

namespace App\Http\Controllers\User;

use App\Enums\WellnessTipType;
use App\Http\Controllers\Controller;
use App\Models\WellnessTip;
use Inertia\Inertia;

class RelaxationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $tips = WellnessTip::where('type', WellnessTipType::RELAXATION)->limit(6)->get();

        return Inertia::render('user/Relaxation/Relaxation', [
            'tips' => $tips
        ]);
    }
}
