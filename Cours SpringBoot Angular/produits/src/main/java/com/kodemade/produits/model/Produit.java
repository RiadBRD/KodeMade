package com.kodemade.produits.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produit {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idProduit;
    private String nomProduit;
    private Double prixProduit;
    private Date dateCreation;

    public Produit() {
        super();
    }

    public Produit( String nomProduit, Double prixProduit,Date dateCreation) {
        this.dateCreation = dateCreation;
        this.nomProduit = nomProduit;
        this.prixProduit = prixProduit;
    }

    public Long getIdProduit() {
        return idProduit;
    }

    public void setIdProduit(Long idProduit) {
        this.idProduit = idProduit;
    }

    public String getNomProduit() {
        return nomProduit;
    }

    public void setNomProduit(String nomProduit) {
        this.nomProduit = nomProduit;
    }

    public Double getPrixProduit() {
        return prixProduit;
    }

    public void setPrixProduit(Double prixProduit) {
        this.prixProduit = prixProduit;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
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
