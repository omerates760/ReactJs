<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    public $table = "rol";
    protected $fillable=['rol_id','rol_name'];
}
