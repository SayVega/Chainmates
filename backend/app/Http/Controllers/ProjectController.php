<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function showProject($id)
    {
        return response()->json(Project::findOrFail($id));
    }

    public function projectUsers($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project->users);
    }

    public function index()
{
    $projects = Project::with('creator')
    ->orderBy('created_at', 'desc')
    ->paginate(10);
    return response()->json($projects);
}
}

