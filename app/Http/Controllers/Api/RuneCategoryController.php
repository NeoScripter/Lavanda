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
            ->map(fn($id) => (int) $id)
            ->filter()
            ->values()
            ->all();

        $categories = RuneCategory::select(['html', 'name', 'rune_id'])->whereIn('rune_id', $ids)
            ->orderBy('order')
            ->get()
            ->groupBy('rune_id')
            ->map(function ($items) {
                return $items->mapWithKeys(function ($item) {
                    return [$item->name => $item->html];
                });
            });

        return response()->json($categories);
    }
}
