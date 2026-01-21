<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Affirmation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AffirmationController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'category' => 'nullable|string|exists:affirmations,type'
        ]);

        return Inertia::render('user/Affirmations/Affirmations', [
            'affirmations' => isset($validated['category'])
                ? Affirmation::where('type', $validated['category'])->get()
                : null,
            'categories' => Affirmation::distinct()->pluck('type'),
        ]);
    }
}
