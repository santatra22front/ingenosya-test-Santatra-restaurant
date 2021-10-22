import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './material/material.module';
import { ModalAchatComponent } from './client/modal-achat/modal-achat.component';
import { ModalPanierComponent } from './client/modal-panier/modal-panier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepasComponent } from './admin/repas/repas.component';
import { IngredientComponent } from './admin/ingredient/ingredient.component';
import { CommandeComponent } from './admin/commande/commande.component';
import { AjouteRepasComponent } from './admin/repas/ajoute-repas/ajoute-repas.component';
import { ModifierRepasComponent } from './admin/repas/modifier-repas/modifier-repas.component';
import { AjouteIngredientComponent } from './admin/ingredient/ajoute-ingredient/ajoute-ingredient.component';
import { ListIngredientComponent } from './admin/ingredient/list-ingredient/list-ingredient.component';
import { ModalValidationComponent } from './admin/commande/modal-validation/modal-validation.component';
import { ModalIngredientComponent } from './admin/commande/modal-ingredient/modal-ingredient.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    ModalAchatComponent,
    ModalPanierComponent,
    RepasComponent,
    IngredientComponent,
    CommandeComponent,
    AjouteRepasComponent,
    ModifierRepasComponent,
    AjouteIngredientComponent,
    ListIngredientComponent,
    ModalValidationComponent,
    ModalIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
