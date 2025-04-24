<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['status' => 'warning', 'message' => "Contact to Administrator"]);
        }

        if (!Auth::validate(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['status' => 'ERR', 'message' => 'Username or password is incorrect']);
        }

        if (!Auth::validate(['email' => $request->email, 'password' => $request->password, 'status' => true])) {
            return response()->json(['status' => 'ERR', 'message' => 'Your account currently de-activated, please contact administrator']);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'status' => true])) {
            session(['loginid' => $user->id]);
            return response()->json(['status' => 'success', 'message' => 'Login Successfully', 'redirect' => '/admin/dashboard']);
            return redirect('/admin/dashboard');
        }else{
            return response()->json(['status'=>'ERR','message'=>'Something went wrong, Please contact Administrator']);
        }
    }

    public function index(Request $request)
    {
        $user = User::find(session('loginid'));
        if (!Auth::check()) {
            return redirect('/admin/login');
        }else{
            return Inertia::render('Admin/dashboard');
        }
        
        switch ($request->type) {
            case 'dashboard':
                return Inertia::render('Admin/dashboard');
                break;
            case 'services':
                return Inertia::render('Admin/servicepage');
                break;
            case 'blog':
                return Inertia::render('Admin/blogpage');
                break;
            case 'enquiries':
                return Inertia::render('Admin/enquiriespage');
                break;
            case 'sessions':
                return Inertia::render('Admin/sessionspage');
                break;
            case 'access':
                $data = User::select('id', 'name', 'email', 'designation', 'status', 'created_at')->get();
                return Inertia::render('Admin/userspage', ['members' => $data]);
                break;
            case 'reviews':
                return Inertia::render('Admin/reviewspage');
                break;
            case 'analytics':
                return Inertia::render('Admin/analyticspage');
                break;
            default:
                return abort(404, 'Page Not Found');
        }
    }

    public function store(Request $post)
    {
        $data = [
            "name" => $post->name,
            "email" => $post->email,
            "designation" => $post->des,
            "password" => Hash::make($post->password),
        ];

        User::create($data);

        return response()->json(['status' => 'success', 'message' => 'Member Created Successfully']);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/admin/login');
    }
}
