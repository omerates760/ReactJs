<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adress extends Model
{
    public $table = "adress";
    protected $fillable=['customer_id','type','adress','city'];
}