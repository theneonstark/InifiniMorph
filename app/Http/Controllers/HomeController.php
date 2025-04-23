<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController
{
    public function index(Request $res)
    {
        switch ($res->type) {
            case 'about':
                return Inertia::render('about');
                break;
            case 'services':
                return Inertia::render('services');
                break;
            case 'blog':
                return Inertia::render('blog');
                break;
            case 'contact':
                return Inertia::render('contact');
                break;
            default:
                return abort(404, "Page Not Found");
        }
    }
}
