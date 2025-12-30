<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\ExperienceItem;
use App\Models\Rune;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RunesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $items = [
            [
                'id' => 1,
                'title' => '1 Руна',
                'description' => 'Один символ — как ключевая подсказка или настроение момента. Простое и точное направление для размышлений.',
            ],
            [
                'id' => 3,
                'title' => '3 Руны',
                'description' => 'Три символа, которые раскрывают ситуацию шире: что было, что важно сейчас и куда движется энергия дальше.',
            ],
            [
                'id' => 5,
                'title' => '5 Рун',
                'description' => 'Более развернутый расклад, где каждая руна показывает разные стороны вашего выбора: суть ситуации, внутренние и внешние влияния, возможный результат.',
            ],
        ];
        $runes = Rune::all()->shuffle();

        return Inertia::render('user/Decision/pages/Runes/Runes', [
            'items' => $items,
            'runes' => $runes,
        ]);
    }
}
