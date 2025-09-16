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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idProduit;
    private String nomProduit;
    private double prixProduit;
    private Date dateCreation;

    @ManyToOne
    private Categorie categorie;

    public Produit(String nomProduit, double prixProduit, Date dateCreation) {
        this.dateCreation = dateCreation;
        this.nomProduit = nomProduit;
        this.prixProduit = prixProduit;
    }

}
