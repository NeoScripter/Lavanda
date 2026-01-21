<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Audio;
use Inertia\Inertia;

class AudioController extends Controller
{
    public function __invoke()
    {
        $audios = Audio::all();

        return Inertia::render('user/Audios/Audios', [
            'audios' => $audios
        ]);
    }
}
