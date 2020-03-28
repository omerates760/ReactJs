<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use DB;

class OrderController extends Controller
{
    public function index()
    {
        $data=DB::table('order')
        ->join('employes','order.customer_id','=','employes.id')
        ->join('product','order.product_id','=','product.id')
        ->select('order.customer_id','order.product_id','order.total','order.customer_adress','employes.name','product.title','product.price','product.description')
        ->get();
        return $data;
    }
 
    public function show($id)
    {
        $data=DB::table('order')
        ->join('employes','order.customer_id','=','employes.id')
        ->join('product','order.product_id','=','product.id')
        ->select('name','title','price','total','customer_adress')
        ->where('order.id','=',$id)
        ->get();
        return $data;   
    }

    public function store(Request $request)
    {
      
        return Order::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->all());

        return $order;
    }

    public function delete(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return 204;
    }
}
