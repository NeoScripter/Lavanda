<?php

namespace App\Models\Concerns;

trait ConvertsMarkdownToHtml
{
    protected static function bootConvertsMarkdownToHtml()
    {
        static::saving(function (self $model) {
            $markdownData = collect(self::getMarkdownToHtmlMap())
                ->mapWithKeys(function ($htmlColumn, $markdownColumn) use ($model): array {
                    if (! isset($model->$markdownColumn) || is_null($model->$markdownColumn)) {
                        return [];
                    }

                    return [
                        $htmlColumn => str($model->$markdownColumn)->markdown([
                            'html_input' => 'strip',
                            'allow_unsafe_links' => false,
                            'max_nesting_level' => 5,
                        ]),
                    ];
                });

            return $model->fill($markdownData->all());
        });
    }

    protected static function getMarkdownToHtmlMap(): array
    {
        return [
            'body' => 'html',
        ];
    }
}
