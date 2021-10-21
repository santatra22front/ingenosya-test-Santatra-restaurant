<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Ingredients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ControllerIngredients extends Controller
{
    public function readIngredients()
    {
        $ingredients = Ingredients::join('repas','repas.id','=','ingredients.id_repas')->get();
        return response()->json($ingredients, 200);
    }

    public function createIngredients(Request $request)
    {
        $createIngredients = Ingredients::create([
            'ID_REPAS' => $request['id_repas'],
            'NOM_INGREDIENTS' => $request['nom_ingredients'],
            'PRIX_INGREDIENTS' => $request['prix_ingredients'],
            'QTE_INGREDIENTS' => $request['qte_ingredients'],
            'STOCK' => $request['stock']
        ]);
    }

    public function readIngredientsId()
    {
        $readIding = DB::table('ingredients')->where('id_repas', 1)->get();
        return response()->json($readIding, 200);
    }

}
