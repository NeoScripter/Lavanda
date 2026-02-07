<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Audio;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AudioController extends Controller
{
    public function __invoke()
    {
        $audios = Cache::flexible('audios', [5, 10], fn () => Gate::check('premium-access') ? Audio::all() : null);

        return Inertia::render('user/Audios/Audios', [
            'audios' => $audios,
        ]);
    }
}
