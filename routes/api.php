<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('product', 'ProductController@index');
Route::get('product/{id}', 'ProductController@show');
Route::post('product', 'ProductController@store');
Route::put('product/{id}', 'ProductController@update');
Route::delete('product/{id}', 'ProductController@delete');
//Category
Route::get('category', 'CategoryController@index');
Route::get('category/{id}', 'CategoryController@show');
Route::post('category', 'CategoryController@store');
Route::put('category/{id}', 'CategoryController@update');
Route::delete('category/{id}', 'CategoryController@delete');
//Employes
Route::get('employes', 'EmployesController@index');
Route::get('employes/{id}', 'EmployesController@show');
Route::post('employes', 'EmployesController@store');
Route::put('employes/{id}', 'EmployesController@update');
Route::delete('employes/{id}', 'EmployesController@delete');
//Adress
Route::get('adress', 'JoinAdressController@index');
Route::get('adress/{id}', 'JoinAdressController@show');
Route::post('adress', 'JoinAdressController@store');
Route::put('adress/{id}', 'JoinAdressController@update');
Route::delete('adress/{id}', 'JoinAdressController@delete');
//Order
Route::get('order', 'OrderController@index');
Route::get('order/{id}', 'OrderController@show');
Route::post('order', 'OrderController@store');
Route::put('order/{id}', 'OrderController@update');
Route::delete('order/{id}', 'OrderController@delete');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
