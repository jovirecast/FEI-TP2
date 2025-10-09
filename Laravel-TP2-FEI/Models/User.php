<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users'; // nombre de la tabla
    protected $primaryKey = 'id_usuario'; // clave primaria

    public $timestamps = false; // desactivamos created_at y updated_at

    protected $fillable = [
        'usuario',
        'email',
        'password',
        'rol',
        'fecha_registro'
    ];
}
