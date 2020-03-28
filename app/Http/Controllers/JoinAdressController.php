<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Adress;
use DB;

class JoinAdressController extends Controller
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
      
        return Adress::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $adress = Adress::findOrFail($id);
        $adress->update($request->all());

        return $adress;
    }

    public function delete(Request $request, $id)
    {
        $adress = Adress::findOrFail($id);
        $adress->delete();

        return 204;
    }

}
