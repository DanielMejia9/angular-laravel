<?php

namespace App\Http\Controllers;

use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use FFI\Exception;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function selectMunicipios(Request $request)
    {
       //Consultamos 
       try{
        $municipios = Db::table('municipios')->where('id_departamentos', $request->id_departamentos)->get();
        return response()->json([
            'success' => true,
            'data' => $municipios,
        ]);
    } 
    catch(Exception $e){
        return response()->json([
            'success'   =>  false,
            'data'      =>  "Error"
        ], 404);
    }
    }

    public function selectDepartamentId(Request $request)
    {
       //Consultamos 
       try{
        $dep = Db::table('departamentos')->where('id_departamentos', $request->id_departamentos)->get();
        return response()->json([
            'success' => true,
            'data' => $dep,
        ]);
    } 
    catch(Exception $e){
        return response()->json([
            'success'   =>  false,
            'data'      =>  "Error"
        ], 404);
    }
    }

    public function selectMunicipiosById(Request $request)
    {
       //Consultamos 
       try{
        $municipios = Db::table('municipios')->where('id_municipios', $request->id_municipios)->first();
        return response()->json([
            'success' => true,
            'data' => $municipios,
        ]);
    } 
    catch(Exception $e){
        return response()->json([
            'success'   =>  false,
            'data'      =>  "Error"
        ], 404);
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
         //Consultamos 
         try{
            $dep = DB::table('departamentos')->get();
            return response()->json([
                'success' => true,
                'data' => $dep,
            ]);
        } 
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Location $location)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        //
    }
}
