<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function index()
    {
        return response()->json(Contacto::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'asunto' => 'required|string|max:150',
            'texto' => 'required|string',
            'creacion' => 'nullable|date'
        ]);

        $contacto = Contacto::create($validated);
        return response()->json($contacto, 201);
    }

    public function show($id)
    {
        return response()->json(Contacto::findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $contacto = Contacto::findOrFail($id);
        $contacto->update($request->all());
        return response()->json($contacto, 200);
    }

    public function destroy($id)
    {
        Contacto::destroy($id);
        return response()->json(null, 204);
    }
}
