<?php
namespace App\Http\Controllers;

use App\Models\Project;

class ShowProjectsController extends Controller
{
    public function showProject($id)
    {
        return response()->json(Project::with('creator')->findOrFail($id));
    }

    public function members($projectId)
    {
    $project = Project::with('members')->findOrFail($projectId);
    return response()->json($project->members);
    }

    public function index()
    {
    $projects = Project::with('creator')
    ->orderBy('created_at', 'desc')
    ->paginate(10);
    return response()->json($projects);
    }
}

