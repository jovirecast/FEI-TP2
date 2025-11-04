<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TriviaController extends Controller
{
    public function getQuestion()
    {
        // Categorías definidas
        $categories = [
            17, // Ciencia
            21, // Deportes
            22, // Geografía
            23, // Historia
            25, // Arte
            19, // Matemáticas
        ];

        // Elegimos una categoría aleatoria
        $randomCategory = $categories[array_rand($categories)];

        // Consumimos la API
        $response = Http::withoutVerifying()->get('https://opentdb.com/api.php', [
            'amount' => 1,
            'category' => $randomCategory,
            'type' => 'multiple'
        ]);

        $data = $response->json();

        if (empty($data['results'])) {
            return response()->json(['error' => 'No se pudo obtener una pregunta'], 500);
        }

        $result = $data['results'][0];

        // Transformamos al formato de tu interfaz
        $pregunta = [
            'id' => rand(1, 999999),
            'documentId' => uniqid('preg_'),
            'texto' => html_entity_decode($result['question']),
            'respuestas' => []
        ];

        // Correcta
        $pregunta['respuestas'][] = [
            'id' => rand(1, 999999),
            'documentId' => uniqid('resp_'),
            'texto' => html_entity_decode($result['correct_answer']),
            'es_correcta' => true,
        ];

        // Incorrectas
        foreach ($result['incorrect_answers'] as $incorrecta) {
            $pregunta['respuestas'][] = [
                'id' => rand(1, 999999),
                'documentId' => uniqid('resp_'),
                'texto' => html_entity_decode($incorrecta),
                'es_correcta' => false,
            ];
        }

        // Mezclamos las respuestas para que no siempre salga la correcta primera
        shuffle($pregunta['respuestas']);

        return response()->json($pregunta);
    }
}
