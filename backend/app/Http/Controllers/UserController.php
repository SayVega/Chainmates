<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use  Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    public function update(Request $request)
    {
        $user = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
        if (!$user) {
            abort(401, 'Usuario no autenticado');
        }
        
        $request->validate([
            'name' => ['nullable','string','max:255'],
            'email' => ['nullable','email:rfc,dns','max:255','unique:users,email,' . $user->id],
            'password' => ['nullable','string','min:6'],
        ]);

        if ($request->filled('name')) {
            $user->name = $request->name;
        }
        if ($request->filled('email')) {
            $user->email = $request->email;
        }
        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }

        $user->save();

        $newToken = JWTAuth::fromUser($user);

        return response()->json([
        'message' => 'Usuario actualizado correctamente',
        'user' => $user,
        'token' => $newToken
        ]);
    }
}
?>