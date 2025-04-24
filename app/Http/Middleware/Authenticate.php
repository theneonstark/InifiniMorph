<?php

namespace App\Http\Middleware;

// use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function redirectTo(Request $request)
    {
        if(!$request->expectsJson()){
            return '/admin/login';
        }
    }
}
