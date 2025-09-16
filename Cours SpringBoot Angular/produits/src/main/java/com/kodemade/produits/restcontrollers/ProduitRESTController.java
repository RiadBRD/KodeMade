package com.kodemade.produits.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kodemade.produits.model.Produit;
import com.kodemade.produits.service.ProduitService;

import jakarta.annotation.security.PermitAll;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRESTController {
    @Autowired
    ProduitService produitService;

    @GetMapping("/produits")
    @PermitAll()
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

}
