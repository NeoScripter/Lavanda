<?php

use App\Enums\WellnessTipType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wellness_tips', function (Blueprint $table): void {
            $table->id();
            $table->string('type')->index()->default(WellnessTipType::RELAXATION->value);
            $table->string('description');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wellness_tips');
    }
};
