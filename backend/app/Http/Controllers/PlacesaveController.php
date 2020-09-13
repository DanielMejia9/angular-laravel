<?php

namespace App\Http\Controllers;

use App\Placesave;
use FFI\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlacesaveController extends Controller
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

        $places = new Placesave();
        $places->title_places = $request->title;
        $places->price_places = $request->price;
        $places->owner_places = $request->name_owner;
        $places->number_phone_places = $request->number_phone;
        $places->number_phone_optional_places = $request->number_phone_optional;
        $places->type_operation = $request->type_operation;
        $places->address_places = $request->address;
        $places->departament = $request->departament;
        $places->municipality = $request->municipality;
        $places->location = $request->location;
        $places->bathroom_places = $request->bathroom;
        $places->bedroom_places = $request->bedroom;
        $places->parking_places = $request->parking;
        $places->room_places = $request->room;
        $places->kitchen_places = $request->kitchen;
        $places->dining_table_places = $request->dinning_room;
        $places->imagen0 = $request->imagen0;
        $places->id_user = $request->idUser;
        $places->type_places = '0';
        $places->save();

        return response()->json([
            'success'   =>  true,
            'data'      =>  $places,
            'id'        =>  $places->id,
        ], 200);

    }

    public function show(Placesave $placesave)
    {
        //Consultamos 
        try{
            $places = DB::table('placesaves')->where('type_places','=', 1)->get();
            return response()->json([
                'success' => true,
                'data' => $places,
            ]);
        } 
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);
        }
    }

    public function showItemId(Request $request)
    {
        //Consultamos 
        try{
            $places = Db::table('placesaves')->where('id', $request->id)->first();
            return response()->json([
                'success' => true,
                'data' => $places,
            ]);
        } 
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);
        }
        
    }

    public function filPlaces(Request $request)
    {
       

        $departamento = $request->deptmento;
        $municipio = $request->municipality;
        $minimo = $request->minimo;
        $maximo = $request->maximo;
        


        try{

            if($departamento > 0 && $municipio == Null && $minimo == Null && $maximo == Null){
                 $places = DB::table('placesaves')->where('departament','=', $departamento)->get();
                 return response()->json([
                     'success' => true,
                     'data' => $places,
                 ]);
             }

            elseif($departamento > 0 && $municipio > 0 && $minimo == Null && $maximo == Null){
                $places = DB::table('placesaves')->where('departament','=', $departamento)->where('municipality','=',$municipio)->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            elseif($departamento > 0 && $municipio > 0 && $minimo > 0 && $maximo == Null){
                $places = DB::table('placesaves')->where('departament','=', $departamento)->where('municipality','=',$municipio)
                ->where('price_places','>=',$minimo)->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            elseif($departamento == Null && $municipio == NULL && $minimo > 0 && $maximo == Null){
                $places = DB::table('placesaves')->where('price_places','>=',$minimo)->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            elseif($departamento == Null && $municipio == Null && $minimo > 0 && $maximo > 0){
                $places = DB::table('placesaves')->where('price_places','>=',$minimo)->where('price_places','<=',$maximo)->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            elseif($departamento == Null && $municipio == Null && $minimo == Null && $maximo == Null){
                $places = DB::table('placesaves')->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            else{
                $places = DB::table('placesaves')->where('departament','=', $departamento)->where('municipality','=',$municipio)
                ->where('price_places','>=',$minimo)->where('price_places','<=',$maximo)->get();

                return response()->json([
                    'success' => true,
                    'data' => $places,
                ]);
            }
            
        } 
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);
        }
        
    }



    public function edit(Placesave $placesave)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Placesave  $placesave
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Placesave $placesave)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Placesave  $placesave
     * @return \Illuminate\Http\Response
     */
    public function destroy(Placesave $placesave)
    {
        //
    }
}
