package com.kodemade.produits.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kodemade.produits.model.Categorie;
import com.kodemade.produits.model.Produit;

public interface ProduitService {

    Produit saveProduit(Produit p); 
  Produit updateProduit(Produit p); 
  void deleteProduit(Produit p); 
  void deleteProduitById(long id); 
  Produit getProduit(long id); 
  List<Produit> getAllProduits(); 
  List<Produit> findByNomProduit(String nom); 
  List<Produit> findByNomProduitContains(String nom); 
  List<Produit> findByNomPrix (String nom, double prix); 
  List<Produit> findByCategorie (Categorie categorie); 
  List<Produit> findByCategorieIdCat(long id); 
  List<Produit> findByOrderByNomProduitAsc(); 
  List<Produit> findByOrderByNomProduitAscPrixProduitDesc();
}
