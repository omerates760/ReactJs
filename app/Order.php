<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = "order";
    protected $fillable=['customer_id','product_id','customer_adress','total'];
}
