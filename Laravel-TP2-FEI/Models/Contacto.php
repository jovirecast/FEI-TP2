<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contacto extends Model
{
    protected $table = 'contactos';
    protected $primaryKey = 'id_contacto';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'email',
        'asunto',
        'texto',
        'creacion'
    ];
}
