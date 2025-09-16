package com.kodemade.produits.model;

import java.util.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produit {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idProduit;
    private String nomProduit;
    private Double prixProduit;
    private Date dateCreation;

    @ManyToOne
    private Categorie categorie;

    public Produit( String nomProduit, Double prixProduit,Date dateCreation) {
        this.dateCreation = dateCreation;
        this.nomProduit = nomProduit;
        this.prixProduit = prixProduit;
    }

    

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Produit{");
        sb.append("idProduit=").append(idProduit);
        sb.append(", nomProduit=").append(nomProduit);
        sb.append(", prixProduit=").append(prixProduit);
        sb.append(", dateCreation=").append(dateCreation);
        sb.append('}');
        return sb.toString();
    }

}
