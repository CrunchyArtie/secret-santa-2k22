<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $reindeerList = [
            'éclair',
            'comète',
            'furie',
            'danseuse',
            'cupidon',
            'tornade',
            'tonnerre'
        ];

        foreach ($reindeerList as $reindeer) {
            User::create([
                'username' => $reindeer,
                'name' => $reindeer,
                'password' => bcrypt($reindeer),
                'reindeer' => $reindeer,
            ]);
        }
    }
}
