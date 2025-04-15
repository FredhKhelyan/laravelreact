<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // GET /tasks
    public function index()
    {
        $tasks = Task::all(); // Récupère toutes les tâches de la base de données
        return response()->json($tasks); // Retourne les tâches sous forme de JSON
    }

    // POST /tasks
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $task = Task::create([
            'title' => $validated['title'],
            'completed' => false,
        ]);

        return response()->json($task, 201);
    }

    // PUT /tasks/{id}
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $task->update($validated);
        return response()->json($task);
    }

    // DELETE /tasks/{id}
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return response()->json(['message' => 'Tâche supprimée']);
    }

    // PATCH /tasks/{id}/toggle
    public function toggleComplete($id)
    {
        $task = Task::findOrFail($id);
        $task->completed = !$task->completed;
        $task->save();

        return response()->json($task);
    }
}