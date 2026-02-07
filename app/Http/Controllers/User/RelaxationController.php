<?php

namespace App\Http\Controllers\User;

use App\Enums\WellnessTipType;
use App\Http\Controllers\Controller;
use App\Models\WellnessTip;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class RelaxationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $tips = null;

        if (Gate::check('premium-access')) {
            $tips = WellnessTip::query()->where('type', WellnessTipType::RELAXATION)->paginate(6);
        }

        return Inertia::render('user/Relaxation/Relaxation', [
            'tips' => $tips,
        ]);
    }
}
