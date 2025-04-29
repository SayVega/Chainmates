<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Project;


class ProjectSeeder extends Seeder
{
    public function run()
{
    // Creamos un usuario ficticio
    $user = User::create([
        'name' => 'Test User 1',
        'wallet_address' => '0xABC123DEF456',
        'login_method' => 'wallet',
    ]);

    // Creamos dos proyectos para ese usuario
    Project::create([
        'title' => 'Hack for the Planet',
        'description' => 'Proyecto ambiental colaborativo',
        'media' => json_encode(['image1.png', 'video1.mp4']),
        'user_id' => $user->id,
    ]);

    Project::create([
        'title' => 'ChainVote DAO',
        'description' => 'Sistema de votación descentralizada',
        'media' => json_encode(['demo.mov']),
        'user_id' => $user->id,
    ]);
}
}
