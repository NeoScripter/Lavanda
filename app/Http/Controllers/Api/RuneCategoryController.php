<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RuneCategory;
use Illuminate\Http\Request;

class RuneCategoryController extends Controller
{
    public function __invoke(Request $request)
    {
        $ids = collect(explode(',', $request->query('selectedRuneIds')))
            ->map(fn($id): int => (int) $id)
            ->filter()
            ->values()
            ->all();

        $categories = RuneCategory::query()->select(['html', 'name', 'rune_id'])->whereIn('rune_id', $ids)
            ->get()
            ->groupBy('rune_id')
            ->map(fn($items) => $items->mapWithKeys(fn($item): array => [$item->name => $item->html]));

        return response()->json($categories);
    }
}
