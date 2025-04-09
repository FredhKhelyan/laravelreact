<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController; // Importation du contrôleur d'authentification

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Ajoutez d'autres routes protégées ici
    Route::get('/protected-route', function () {
        return response()->json(['message' => 'This route is protected!']);
    });

    // Route pour la déconnexion
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Routes publiques
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
