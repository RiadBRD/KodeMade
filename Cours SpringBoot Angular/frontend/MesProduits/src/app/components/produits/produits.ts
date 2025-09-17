import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../../model/produit.model';
import { ProduitService } from '../../services/produit-service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits implements OnInit {
  produits : Produit[];

  ngOnInit(): void {}

  constructor(private readonly produitService :  ProduitService) {
    this.produits = produitService.listeProduits();
  }


}
