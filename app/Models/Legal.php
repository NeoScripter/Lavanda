<?php

namespace App\Models;

use App\Models\Concerns\ConvertsMarkdownToHtml;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Legal extends Model
{
    /** @use HasFactory<\Database\Factories\LegalFactory> */
    use HasFactory, ConvertsMarkdownToHtml;
}
