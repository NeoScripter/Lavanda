<?php

namespace App\Http\Controllers\User;

use App\Enums\RuneCategoryName;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RuneDetailsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate(['category' => ['nullable', Rule::enum(RuneCategoryName::class)]]);

        $category = empty($validated['category']) ? 'Общая' : $validated['category'];

        $categories = collect(RuneCategoryName::cases())
            ->map(fn($case) => $case->value)
            ->all();

        $runes = DB::select("select r.id, r.name, r.advice, i.id img_id, i.path, i.tiny_path, i.alt, c.html from runes r
            left join rune_categories c
            on r.id = c.rune_id
            left join images i
            on i.imageable_id = r.id
            and i.imageable_type = 'rune'
            and i.type = 'front'
            where c.name = ?", [$category]);

        $runes = array_map(function ($rune) {
            return [
                'id' => $rune->id,
                'name' => $rune->name,
                'advice' => $rune->advice,
                'html' => $rune->html,
                'front_image' => [
                    'id' => $rune->img_id,
                    'path' => $rune->path,
                    'tiny_path' => $rune->tiny_path,
                    'alt' => $rune->alt,
                ]
            ];
        }, $runes);

        return Inertia::render('user/RuneDetails/RuneDetails', [
            'runes' => $runes,
            'categories' => $categories,
        ]);
    }
}
