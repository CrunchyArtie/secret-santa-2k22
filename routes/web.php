<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

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

if (!!env('APP_RAQOUC_IS_EDITABLE', false)) {
    Route::middleware(['web', 'guest'])->group(function () {
        Route::controller(\App\Http\Controllers\AdminPanelController::class)->group(function () {
            Route::get('/', 'index');
            Route::post('/', 'store');
        });
    });
}

Route::any('/{any}', function () {
    return ['Laravel' => app()->version()];
//    return view('angular');
//    abort(404);
})->where('any', '^(?!api).*$');

