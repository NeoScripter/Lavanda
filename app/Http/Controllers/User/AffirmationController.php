<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Affirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AffirmationController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'category' => ['nullable', 'string', 'exists:affirmations,type'],
        ]);

        $isMember = Gate::check('premium-access');

        return Inertia::render('user/Affirmations/Affirmations', [
            'affirmations' => $isMember && isset($validated['category'])
                ? Affirmation::query()->where('type', $validated['category'])->get()
                : null,
            'categories' => Cache::flexible('affirmation-categories', [2, 4],
                fn () => Affirmation::query()->distinct()->pluck('type')),
            'category' => $isMember && isset($validated['category']) ? $validated['category'] : null,
        ]);
    }
}
