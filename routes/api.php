<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
The 'posts' API needs to use Auth class (i.e. user's session data).
RESTful web services are supposed to be stateless, so using the user's session data (in this case, it's Auth::user()->id) is against its principal.
This API is available under routes/web.php
 */
//Route::resource('posts', 'Api\PostController');
