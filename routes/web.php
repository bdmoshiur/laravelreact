<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.app');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

