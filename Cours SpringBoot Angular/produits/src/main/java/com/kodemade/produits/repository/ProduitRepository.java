package com.kodemade.produits.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kodemade.produits.model.Categorie;
import com.kodemade.produits.model.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByNomProduit(String nom);

    List<Produit> findByNomProduitContains(String nom);

    @Query("select p from Produit p where p.prixProduit > :prix and p.nomProduit like %:nom%")
    List<Produit> findByNomPrix(@Param("nom") String nom, @Param("prix") double prix);

    @Query("select p from Produit p where p.categorie = :categorie")
    List<Produit> findByCategorie(@Param("categorie")Categorie categorie);

    List<Produit> findByCategorieIdCat(Long idProduit);

    List<Produit> findByOrderByNomProduitAsc();

    List<Produit> findByOrderByNomProduitAscPrixProduitDesc();
}
