<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('services');
    }

    public function services(Request $request)
    {
        switch ($request->type) {
            case "3d-graphics-animation":
                return Inertia::render('Services/service');
                break;
            case "web-development":
                return Inertia::render('Services/service');
                break;
            case "ui-ux-design":
                return Inertia::render('Services/service');
                break;
            case "seo-marketing":
                return Inertia::render('Services/service');
                break;
            case "fintech-solutions":
                return Inertia::render('Services/service');
                break;
            case "custom-software":
                return Inertia::render('Services/service');
                break;
            case "Company-Registration":
                return Inertia::render('Services/service');
                break;
            case "ITR-File":
                return Inertia::render('Services/service');
                break;
            case "Payroll-Registration-Support":
                return Inertia::render('Services/service');
                break;
            default:
                return Inertia::render('Services/service');
        }
    }
}
