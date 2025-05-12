<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShowProjectsController;
use App\Http\Controllers\Auth\WalletLoginController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\HandleApiErrors;
use App\Http\Controllers\ProjectController;

Route::get('/projects', [ShowProjectsController::class, 'index']);
Route::get('/projects/{id}', [ShowProjectsController::class, 'showProject']);
Route::get('/projects/{id}/users', [ShowProjectsController::class, 'members']);
Route::post('/wallet-login', [WalletLoginController::class, 'login']);
Route::middleware([HandleApiErrors::class])->put('/user', [UserController::class, 'update']);
Route::middleware('auth:api')->post('/newproject', [ProjectController::class, 'store']);


// Dummy route
Route::get('/login', function () {
    return response()->json(['message' => 'Unauthorized'], 401);
})->name('login');