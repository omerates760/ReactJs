<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employes;

class EmployesController extends Controller
{
    public function index()
    {
        return Employes::all();
    }
 
    public function show($id)
    {
        return Employes::find($id);
    }

    public function store(Request $request)
    {
        return Employes::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $employes = Employes::findOrFail($id);
        $employes->update($request->all());

        return $employes;
    }

    public function delete(Request $request, $id)
    {
        $employes = Employes::findOrFail($id);
        $employes->delete();

        return 204;
    }
}
