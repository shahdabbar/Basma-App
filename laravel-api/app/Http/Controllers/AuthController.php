<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        };

        $token_validity = 24 * 60;
        $this->guard()->factory()->setTTL($token_validity);

        if(!$token = $this->guard()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);

    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|between:2,100',
            'email'    => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        };

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'User created successfully', 
            'user' => $user,
            'token' => $this->respondWithToken(
                $this->guard()->attempt($validator->validated())
            )
        ]);
    }
    
    public function logout(Request $request) {
        $this->guard()->logout();
        return response()->json(['message' => 'User logged out successfully']);
    }

    public function profile() {
        return response()->json($this->guard()->user());
    }

    public function refresh(Request $request) {
        return $this->respondWithToken($this->guard()->refresh());
    }

    protected function respondWithToken($token) {
        return response()->json([
            'token'          => $token,
            'token_type'     => 'bearer',
            'token_validity' => $this->guard()->factory()->getTTL() * 60
        ]);
    }

    protected function guard() {
        return Auth::guard();
    }

    public function customers(Request $request) {
        $users = User::where(function($query) use($request) {
            if($request->keyword) {
                $query->where('id', $request->keyword)
                ->orWhere('name', 'like', '%' . $request->keyword . '%')
                ->orWhere('email', 'like', '%' . $request->keyword . '%')->get();
            }

            // if($request->name) {
            //     $query->where('name', 'like', '%' . $request->name . '%')->get();
            // }

            // if($request->email) {
            //     $query->where('email', 'like', '%' . $request->email . '%')->get();
            // }

        })->Paginate($request->perPage);
        
        return response()->json([
            'message' => 'customers successfully fetched', 
            'customers' => $users

        ]);
    }

    public function average(Request $request) {
        $currentDate = date('Y-m-d H:i:s');
        $customers = User::WhereBetween('created_at', [$request->date, $currentDate])->get()->count();
        $allCustomers = User::all()->count();
        return response()->json(['customers' => $customers, 'allCustomers' => $allCustomers]);
    }
}
