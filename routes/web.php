<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome'));

Route::get("/{type}", [HomeController::class, 'index']);

Route::group(['prefix' => 'services'], function () {
    Route::get('/{type}', [ServiceController::class, 'services']);
});

Route::post('/enquiry', [EnquiryController::class, 'contact']);

Route::get('/admin', function () {
    return Inertia::render('Admin/sessionspage');
});

Route::group(["prefix" => "admin"], function () {
    Route::get('/{type}', [AdminController::class, 'index']);
});
