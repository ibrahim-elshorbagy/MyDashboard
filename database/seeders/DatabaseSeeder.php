<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {



        $this->call(RolesAndPermissionsSeeder::class);

        //admin
        $user = User::factory()->create([
            'name' => 'ibrahim elshorbagy',
            'email' => 'a@a.a',
            'password' =>Hash::make('a'),
        ]);
        $user->assignRole('admin');


    }
}
