<?php
use App\Http\Controllers\Auth\WalletLoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;

use App\Http\Controllers\ProjectController;

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::get('/projects/{id}/users', [ProjectController::class, 'users']);
Route::post('/wallet-login', [WalletLoginController::class, 'login']);

