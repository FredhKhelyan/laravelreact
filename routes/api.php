<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

Route::middleware('auth:sanctum')->group(function () {

    // Toutes les routes RESTful nécessaires
    Route::get('/tasks', [TaskController::class, 'index']); // Lister
    Route::post('/tasks', [TaskController::class, 'store']); // Créer
    Route::put('/tasks/{id}', [TaskController::class, 'update']); // Mettre à jour
    Route::patch('/tasks/{id}/toggle', [TaskController::class, 'toggleComplete']); // Marquer terminé / non terminé
    Route::delete('/tasks/{id}', [TaskController::class, 'destroy']); // Supprimer

    // Optionnel : obtenir les infos utilisateur connecté
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Déconnexion
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Authentification publique
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
