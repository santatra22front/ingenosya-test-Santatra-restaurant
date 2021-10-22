import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { RepasComponent } from './admin/repas/repas.component';
import { IngredientComponent } from './admin/ingredient/ingredient.component';
import { CommandeComponent } from './admin/commande/commande.component';
const routes: Routes = [
  {path:'',component:ClientComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'',component:RepasComponent},
    {path:'repas',component:RepasComponent},
    {path:'ingredients',component:IngredientComponent},
    {path:'commandes',component:CommandeComponent},
  ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
