<?php

namespace App\Http\Controllers\User\Decision;

use App\Enums\RuneCategoryName;
use App\Http\Controllers\Controller;
use App\Models\Rune;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class RunesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $categories = collect(RuneCategoryName::cases())
            ->map(fn($case) => $case->value)
            ->all();

        $items = [
            [
                'id' => 1,
                'title' => '1 Руна',
                'description' => 'Один символ. Одна подсказка. Для вопроса, который волнует тебя сегодня',
            ],
            [
                'id' => 3,
                'title' => '3 Руны',
                'description' => 'Три символа помогают увидеть ситуацию шире. Иногда сочетание рун имеет важное значение.',
            ],
            [
                'id' => 5,
                'title' => '5 Рун',
                'description' => 'Самый подробный расклад для тех, кто хочет разобраться в ситуации глубже.',
            ],
        ];

        $runes = null;

        if (Gate::check('premium-access')) {
            $runes = Cache::flexible(
                'runes',
                [5, 10],
                fn() => Rune::all()->load('categories')
            );
            $runes = $runes->shuffle();
        }

        return Inertia::render('user/Decision/pages/Runes/Runes', [
            'items' => $items,
            'runes' => $runes,
            'categories' => $categories,
        ]);
    }
}
