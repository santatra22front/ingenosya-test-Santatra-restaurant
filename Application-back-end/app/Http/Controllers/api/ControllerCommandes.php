<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Commandes;
use Illuminate\Http\Request;

class ControllerCommandes extends Controller
{
    public function createCommandes(Request $request){
        $commandes['ID_REPAS'] = $request['id_repas'];
        $commandes['ID_CLIENTS'] = 1;
        $commandes['QTE'] = $request['qte'];
        $commandes['ETAT'] = 0;
        $commandes['EMBALLAGE'] = $request['Emballage'];
        $commandes['SERVIETTE'] = $request['Serviette'];
        $commandes['COUVERT'] = $request['Couvert'];

        Commandes::create($commandes);
        return response()->json([
            'message' => "Ajout reussi",
            'succes' => true
        ], 200);
    }
    
    public function readCommandes(){
        $commandes = Commandes::join('repas','repas.id','=','commandes.id_repas')->get();
        return response()->json($commandes, 200);
    }
}
