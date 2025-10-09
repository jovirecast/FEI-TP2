<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = 'categorias';
    protected $primaryKey = 'id_categoria';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'color'
    ];

    // Relación: una categoría tiene muchas preguntas
    public function preguntas()
    {
        return $this->hasMany(Pregunta::class, 'id_categoria', 'id_categoria');
    }
}
