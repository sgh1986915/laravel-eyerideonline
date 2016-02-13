<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', ['as' => 'index', 'uses' => 'HomeController@index']);
Route::get('/solutions', ['as' => 'solutions', 'uses' => 'HomeController@solutions']);
Route::get('/benefits/{name}', ['as' => 'benefits.subpage', 'uses' => 'BenefitsController@show']);
Route::get('/company', ['as' => 'company', 'uses' => 'HomeController@company']);
Route::get('/customers', ['as' => 'customers', 'uses' => 'HomeController@customers']);
Route::group(['prefix' => 'customer'], function () {
    Route::get('/', ['as' => 'customer.index', 'uses' => 'CustomerController@index']);
    Route::get('/{name}', ['as' => 'customer.show', 'uses' => 'CustomerController@show']);
});
Route::group(['prefix' => 'product'], function () {
    Route::get('/', ['as' => 'product.index', 'uses' => 'ProductController@index']);
    Route::get('/{id}', ['as' => 'product.show', 'uses' => 'ProductController@show']);
    Route::get('/{id}/downloadfile', ['as' => 'downloadfile', 'uses' => 'ProductController@downloadfile']);
});
Route::get('/roi', ['as' => 'roi', 'uses' => 'HomeController@roi']);
Route::post('/email', ['as' => 'send.mail', 'uses' => 'HomeController@mail']);
Route::get('/terms', function () {
    return view('terms');
});
Route::get('/privacy', function () {
    return view('privacy');
});
Route::get('/video', function () {
    return Redirect::to('https://www.youtube.com/channel/UCpibHZtQwpLF3BcxV7oPAjg');
});