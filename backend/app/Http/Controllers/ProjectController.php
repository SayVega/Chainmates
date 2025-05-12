<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $user = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        if (!$user) {
            abort(401, 'Usuario no autenticado');
        }

        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'documentation' => ['nullable', 'url'],
            'media' => ['nullable', 'array'],
            'media.*' => ['nullable','url'],
        ]);

        DB::beginTransaction();

        try {
            $project = Project::create([
                'title' => $request['title'],
                'description' => $request['description'] ?? null,
                'documentation' => $request['documentation'] ?? null,
                'media' =>  ($request['media']) ?? null,
                'user_id' => $user->id,
            ]);
    
            DB::table('project_members')->insert([
                'project_id' => $project->id,
                'user_id' => $user->id,
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    
            DB::commit();
    
            return response()->json($project, 201);
    
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Error al crear el proyecto.'], 500);
        }
    }
}
