<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\Iching;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class IchingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $bitmask = $request->input('bitmask');

        $bitmask = is_numeric($bitmask)
            ? (int) $bitmask
            : null;

        $bitmask = $bitmask > 64 ? null : $bitmask;

        return Inertia::render('user/Decision/pages/Iching/Iching', [
            'iching' => $bitmask === null
                ? null
                : Iching::where('bitmask', $bitmask)->first()
        ]);
    }
}
