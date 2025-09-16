package com.kodemade.produits.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.kodemade.produits.model.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long>{

}
