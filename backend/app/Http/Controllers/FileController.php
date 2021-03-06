<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function addImages(Request $request){
        
        $fileName = rand();
        $path = $request->file('name')->move(public_path("images/"), $fileName.'.jpg');
        $nameFile  =  $fileName.'.jpg';
        $photoURL = url('images/'.$fileName.'.jpg');
        return response()->json(['url' => $photoURL, 'name' => $nameFile], 200);
    }


}
