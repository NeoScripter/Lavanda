<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Ilya Andreev',
            'email' => 'sange0337@gmail.com',
        ]);

        User::factory()->create([
            'name' => 'Татьяна',
            'email' => 'Kimjjtatiana@gmail.com',
            'role' => UserRole::ADMIN,
        ]);
    }
}
