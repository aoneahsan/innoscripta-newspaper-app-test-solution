<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsArticleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');
    Route::delete('/logout', 'logout')->middleware('auth:sanctum');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('/getUserData', 'getUserData');
        Route::put('/updateUserData', 'updateUserData');
        Route::post('/updateUserStatus', 'updateUserStatus');
    });

    // /searchNewsArticles
    // /getNewsFeed
    Route::controller(NewsArticleController::class)->group(function () {
        Route::get('/searchNewsArticles', 'searchNewsArticles');
        Route::get('/getNewsFeed', 'getNewsFeed');
    });
});
