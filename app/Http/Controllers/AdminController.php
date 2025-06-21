<?php

namespace App\Http\Controllers;

use App\Models\Enquiries;
use App\Models\LogSession;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
            \App\Models\LogSession::create([
                'user_id' => $user->id,
                'ip_address'=> $request->ip(),
                'user_agent'=>$_SERVER['HTTP_USER_AGENT'],
                'gps_location'=> $request->gps_location,
                'ip_location'=>$request->ip_location,
                'device_id'=>$request->device_id
            ]);
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
                $data = Enquiries::all();
                return Inertia::render('Admin/enquiriespage', ['enquiries' => $data]);
                break;
            case 'sessions':
                $data = LogSession::select(
                    'log_sessions.id',
                    'log_sessions.ip_address',
                    'log_sessions.created_at',
                    'log_sessions.updated_at',
                    DB::raw('COALESCE(users.name, "Unknown") as user_name'),
                    DB::raw('COALESCE(users.designation, "Not Assigned") as user_designation')
                )
                ->leftJoin('users', 'log_sessions.user_id', '=', 'users.id')
                ->whereIn('log_sessions.id', function ($query) {
                    $query->select(DB::raw('MAX(id)'))
                        ->from('log_sessions')
                        ->groupBy('ip_address');
                })
                ->orderBy('log_sessions.created_at', 'desc')
                ->get();
                return Inertia::render('Admin/sessionspage', ['sessions' => $data]);
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
