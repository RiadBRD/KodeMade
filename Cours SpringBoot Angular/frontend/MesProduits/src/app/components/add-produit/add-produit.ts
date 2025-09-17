import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../model/produit.model';
import { ProduitService } from '../../services/produit-service';

@Component({
  selector: 'app-add-produit',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css'
})
export class AddProduit implements OnInit{
  constructor(private readonly produitService :  ProduitService){

  }
  newProduit = new Produit();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit);
  }

}
