<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Rol;
use DB;
class RolController extends Controller
{
    public function index()
    {
        $data=DB::table('adress')
        ->join('employes','adress.customer_id','=','employes.id')
        ->select('customer_id','adress.type','adress.adress','adress.city')
        ->get();
        return $data;
    }
 
    public function show($id)
    {
        $data=DB::table('adress')
        ->join('employes','employes.id','=','adress.customer_id')
        ->select('customer_id','adress.type','adress.adress','adress.city')
        ->where('adress.id','=',$id)
        ->get();
        return $data;   
    }

    public function store(Request $request)
    {
      
        return Rol::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $rol = Rol::findOrFail($id);
        $rol->update($request->all());

        return $adress;
    }

    public function delete(Request $request, $id)
    {
        $rol = Rol::findOrFail($id);
        $rol->delete();

        return 204;
    }
}
