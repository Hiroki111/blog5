<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', 'HomeController@index');

Auth::routes();

//This route has to be preserved for the back end pages.
Route::get('/admin', 'AdminPageController@index')->name('admin');

//Internal APIs - ones which are not used by external applications
//They don't need to be in api.php
Route::resource('posts', 'Api\PostController');
Route::resource('images', 'Api\ImageController');
//Images don't have IDs (they only have names), so the URL for the delete
//function doesn't end with {id}, and there will be a file name in request payload.
Route::delete('/images', 'Api\ImageController@destroy');

//www
Route::get('/{url}', 'HomeController@show');
