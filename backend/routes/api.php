<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', 'JWTAuthController@register');
    Route::post('login', 'JWTAuthController@login');
    Route::post('logout', 'JWTAuthController@logout');
    Route::post('refresh', 'JWTAuthController@refresh');
    Route::get('profile', 'JWTAuthController@profile');

    Route::post('addImages', 'FileController@addImages');

    
});

Route::group(['before' => 'auth'], function()
{
    Route::post('savePlaces', 'PlacesaveController@store'); 
    Route::get('showPlaces', 'PlacesaveController@show');
    Route::post('itemById', 'PlacesaveController@showItemId');
    
    //Location
    Route::get('selectDepartamentos', 'LocationController@show');
    Route::post('selectMunicipioByDep', 'LocationController@selectMunicipios');
    Route::post('selectDepartamentosById', 'LocationController@selectDepartamentId');
    Route::post('selectMunicipioById', 'LocationController@selectMunicipiosById');
});
