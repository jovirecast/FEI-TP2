<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\PreguntaController;
use App\Http\Controllers\RespuestaController;
use App\Http\Controllers\ContactoController;

// Ruta de prueba rápida
Route::get('/ping', function() {
    return response()->json(['pong' => true]);
});

// Rutas API REST para todas tus entidades
Route::apiResource('user', UserController::class);
Route::apiResource('categoria', CategoriaController::class);
Route::apiResource('pregunta', PreguntaController::class);
Route::apiResource('respuesta', RespuestaController::class);
Route::apiResource('contacto', ContactoController::class);
Route::post('/login', [AuthController::class, 'login']);
