<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

// Route::get('/services', function () {
//     return Inertia::render('services');
// })->name('services');

Route::group(['prefix' => 'services'], function() {
    Route::get('/', [ServiceController::class, 'index']);
    Route::get('/{type}', [ServiceController::class, 'services']);
});

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/admin',function(){
    return Inertia::render('Admin/layout');
});
