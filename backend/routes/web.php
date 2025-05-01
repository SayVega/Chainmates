<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Auth\WalletLoginController;
use App\Http\Controllers\UserController;


Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::get('/projects/{id}/users', [ProjectController::class, 'users']);
Route::post('/wallet-login', [WalletLoginController::class, 'login']);
Route::middleware('auth:api')->put('/user', [UserController::class, 'update']);
