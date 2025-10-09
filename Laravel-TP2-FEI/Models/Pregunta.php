<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    protected $table = 'preguntas';
    protected $primaryKey = 'id_pregunta';
    public $timestamps = false;

    protected $fillable = [
        'id_categoria',
        'texto'
    ];

    // Relación: una pregunta pertenece a una categoría
    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'id_categoria', 'id_categoria');
    }

    // Relación: una pregunta tiene muchas respuestas
    public function respuestas()
    {
        return $this->hasMany(Respuesta::class, 'id_pregunta', 'id_pregunta');
    }
}
