<?php

namespace App\Http\Controllers;

use App\Models\Pregunta;
use Illuminate\Http\Request;

class PreguntaController extends Controller
{
    public function index()
    {
        return response()->json(Pregunta::with('respuestas', 'categoria')->get(), 200);
    }

    public function store(Request $request)
    {
        $pregunta = Pregunta::create($request->all());
        return response()->json($pregunta, 201);
    }

    public function show($id)
    {
        return response()->json(Pregunta::with('respuestas', 'categoria')->findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $pregunta = Pregunta::findOrFail($id);
        $pregunta->update($request->all());
        return response()->json($pregunta, 200);
    }

    public function destroy($id)
    {
        Pregunta::destroy($id);
        return response()->json(null, 204);
    }
}
