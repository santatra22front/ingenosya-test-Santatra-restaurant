<?php

use App\Http\Controllers\api\ControllerCommandes;
use App\Http\Controllers\api\ControllerIngredients;
use App\Http\Controllers\api\ControllerRepas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


    Route::get('/repas', [ControllerRepas::class, 'readRepas']);
    Route::post('/createRepas', [ControllerRepas::class, 'createRepas']);

    Route::get('/readIngredients', [ControllerIngredients::class, 'readIngredients']);
    Route::get('/readIngredientsID', [ControllerIngredients::class, 'readIngredientsId']);
    Route::post('/', [ControllerIngredients::class, 'createIngredients']);


    Route::get('/', [ControllerCommandes::class, 'readCommandes']);
    Route::post('/', [ControllerCommandes::class, 'createCommandes']);

