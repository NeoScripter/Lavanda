<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Article $article)
    {
        return Inertia::render('user/Article/Article', [
            'article' => Cache::flexible(
                $article->name,
                [2, 3],
                fn(): JsonResource => $article->toResource()
            ),
        ]);
    }
}
