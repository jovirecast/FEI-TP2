<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string',
            'password' => 'required|string'
        ]);

        // Buscar usuario por nombre, email o username
        $user = User::where('usuario', $request->usuario)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(["ok" => false, 'error' => 'Credenciales incorrectas'], 401);
        }

        // Generar token Laravel Sanctum
        // $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'ok' => true,
        ], 200);
    }
}