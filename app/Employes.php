<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employes extends Model
{
    public $table = "employes";
    protected $fillable=['name','email','phone'];
}
