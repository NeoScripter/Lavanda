<?php

namespace App\Http\Controllers\User;

use App\Enums\WellnessTipType;
use App\Http\Controllers\Controller;
use App\Models\WellnessTip;
use Inertia\Inertia;

class ToolkitController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $tips = WellnessTip::where('type', WellnessTipType::TOOLKIT)->limit(6)->get();

        return Inertia::render('user/ToolKit/ToolKit', [
            'tips' => $tips
        ]);
    }
}
