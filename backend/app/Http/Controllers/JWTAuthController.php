<?php

namespace App\Http\Controllers;

use  Tymon\JWTAuth\Facades\JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Exception;


class JWTAuthController extends Controller
{

    public $loginAfterSignUp = true;
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {

        try{
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();
    

            if ($this->loginAfterSignUp) {
                return $this->login($request);
            }
            return response()->json([
                'success'   =>  true,
                'data'      =>  $user
            ], 200);
        }
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);

        }
        
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $password = User::where('password', $request->email)->first();
        $token = null;

        if(!$user && !$password){
            return response()->json([
                'success' => false,
                'error' => 'invalid_credentials'],400
            );
        }
        else{

            $input = $request->only('email', 'password');
            $user = DB::table('users')->where('email', $request->email)->first();

            if (! $token = JWTAuth::attempt($input)){
                return response()->json([
                    'success' => false,
                    'error' => 'invalid_credentials'],400
                );
            }
            else{
                return response()->json([
                    'success' => true,
                    'token' => $token,
                    'id'  => $user->id,
                    'name'=> $user->name

                ]);
            }
        }
        
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
       //return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
       /*return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);*/
    }

    public function userById(Request $request)
    {
         //Consultamos 
         try{
            $user = Db::table('users')->where('id', $request->id)->first();
            return response()->json([
                'success' => true,
                'data' => $user,
            ]);
        } 
        catch(Exception $e){
            return response()->json([
                'success'   =>  false,
                'data'      =>  "Error"
            ], 404);
        }

    }


}
