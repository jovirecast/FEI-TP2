<?php

namespace App\Http\Controllers;

use App\Models\Respuesta;
use Illuminate\Http\Request;

class RespuestaController extends Controller
{
    public function index()
    {
        return response()->json(Respuesta::with('pregunta')->get(), 200);
    }

    public function store(Request $request)
    {
        $respuesta = Respuesta::create($request->all());
        return response()->json($respuesta, 201);
    }

    public function show($id)
    {
        return response()->json(Respuesta::with('pregunta')->findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $respuesta = Respuesta::findOrFail($id);
        $respuesta->update($request->all());
        return response()->json($respuesta, 200);
    }

    public function destroy($id)
    {
        Respuesta::destroy($id);
        return response()->json(null, 204);
    }
}
