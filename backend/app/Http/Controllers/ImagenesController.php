<?php

namespace App\Http\Controllers;

use App\Imagenes;
use FFI\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImagenesController extends Controller
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
    public function store(Request $request)
    {
        //Guardamos las imagenes
        $imagen = new Imagenes();
        $imagen->imagen = $request->img;
        $imagen->id_places = $request->id;
        $imagen->save();

        return response()->json([
            'success'   =>  true,
            'data'      =>  $imagen,
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Imagenes  $imagenes
     * @return \Illuminate\Http\Response
     */
    public function show(Imagenes $imagenes)
    {
        
    }

    public function showImgId(Request $request)
    {
        $id = $request->id;
        //var_dump($request);
       // exit;
        //Consultamos 
        try{
            $img = DB::table('imagenes')->where('id_places','=', $id )->get();
            return response()->json([
                'success' => true,
                'data' => $img,
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
     * @param  \App\Imagenes  $imagenes
     * @return \Illuminate\Http\Response
     */
    public function edit(Imagenes $imagenes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Imagenes  $imagenes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Imagenes $imagenes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Imagenes  $imagenes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Imagenes $imagenes)
    {
        //
    }
}
