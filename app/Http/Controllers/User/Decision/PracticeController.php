<?php

namespace App\Http\Controllers\User\Decision;

use App\Http\Controllers\Controller;
use App\Models\PracticeItem;
use Inertia\Inertia;

class PracticeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $items = PracticeItem::limit(9)->get();

        return Inertia::render('user/Decision/pages/Practice/Practice', [
            'items' => $items
        ]);
    }
}
