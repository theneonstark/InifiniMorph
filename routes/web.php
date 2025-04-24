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


Route::group(["prefix" => "admin"], function () {
    Route::group(['middleware' => 'guest'],function () {
        Route::get('/login', fn () => Inertia::render('Admin/login'))->name('mylogin');
        Route::post('/check', [AdminController::class, 'login']);
    });
    Route::group(['middleware' => 'auth'],function () {
        Route::get('/logout', [AdminController::class, 'logout'])->name('logout');
        Route::get('/{type}', [AdminController::class, 'index'])->name('dashboard');
        Route::post('/store', [AdminController::class, 'store']);
    });
});
