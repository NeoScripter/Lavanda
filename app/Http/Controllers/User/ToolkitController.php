<?php

namespace App\Http\Controllers\User;

use App\Enums\WellnessTipType;
use App\Http\Controllers\Controller;
use App\Models\WellnessTip;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ToolkitController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $tips = null;

        if (Gate::check('premium-access')) {
            $tips = WellnessTip::query()->where('type', WellnessTipType::TOOLKIT)->paginate(6);
        }

        return Inertia::render('user/ToolKit/ToolKit', [
            'tips' => $tips,
        ]);
    }
}
