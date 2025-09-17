import { Routes } from '@angular/router';
import { Produits } from './components/produits/produits';
import { AddProduit } from './components/add-produit/add-produit';

export const routes: Routes = [
  {path:"produits",component:Produits},
  {path:"add-produit",component:AddProduit},
  {path:"",redirectTo:"/produits",pathMatch:"full"}
];
