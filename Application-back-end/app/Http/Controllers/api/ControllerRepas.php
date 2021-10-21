<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Repas;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ControllerRepas extends Controller
{
    public function readRepas()
    {
        $repas = Repas::all();

        return response()->json($repas, 200);
    }

    public function createRepas(Request $request)
    {
        $createRepas = Repas::create([
            'NOM_REPAS' => $request['nomRepas'],
            'PRIX' => $request['prix']
        ]);

        return response()->json([
            'message' => "Ajout repas reussi",
            'succes' => true
        ], 200);
    }
}
