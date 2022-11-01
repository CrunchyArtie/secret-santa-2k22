<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use function PHPUnit\Framework\throwException;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->merge(['reindeer' => str::lower($request->input('reindeer'))]);

        $request->validate([
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'name' => ['required', 'string', 'max:255'],
//            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'reindeer' => ['required', 'unique:users', Rule::in([
                'éclair',
                'comète',
                'furie',
                'danseuse',
                'cupidon',
                'tornade',
                'tonnerre',
            ])],
        ]);

        $user = User::create([
            'username' => $request->username,
            'name' => $request->name,
//            'email' => $request->email,
            'password' => Hash::make($request->password),
            'reindeer' => $request->reindeer,
        ]);

        event(new Registered($user));
//        Auth::login($user);
        $token = $user->createToken(env('APP_NAME'))->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user->load('raqouc')], 201);
    }
}
