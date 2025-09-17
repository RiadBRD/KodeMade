package com.kodemade.produits.model;

import org.springframework.data.rest.core.config.Projection;

@Projection(name="nomProd",types={Produit.class})
public interface ProduitProjection {
    public String getNomProduit();
    public double getPrixProduit();
}
