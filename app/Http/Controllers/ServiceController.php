<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class ServiceController extends Controller
{

    public function services(Request $request)
    {
        switch ($request->type) {
            case "3d-graphics-animation":
                return Inertia::render('Services/graphicservice');
                break;
            case "web-development":
                return Inertia::render('Services/webdevservice');
                break;
            case "ui-ux-design":
                return Inertia::render('Services/uiuxservice');
                break;
            case "seo-marketing":
                return Inertia::render('Services/seoservice');
                break;
            case "fintech-solutions":
                return Inertia::render('Services/fintectservice');
                break;
            case "custom-software":
                return Inertia::render('Services/customservice');
                break;
            case "Company-Registration":
                return Inertia::render('Services/companyservice');
                break;
            case "ITR-File":
                return Inertia::render('Services/itrservice');
                break;
            case "Payroll-Registration-Support":
                return Inertia::render('Services/payrollservice');
                break;
            default:
                return abort(404, "Page Not Found");
        }
    }
}
