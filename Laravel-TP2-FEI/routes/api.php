<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
Route::apiResource('users', UserController::class);
Route::apiResource('categorias', CategoriaController::class);
Route::apiResource('preguntas', PreguntaController::class);
Route::apiResource('respuestas', RespuestaController::class);
Route::apiResource('contactos', ContactoController::class);
