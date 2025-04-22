<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController
{
    public function index(Request $request)
    {
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
}
