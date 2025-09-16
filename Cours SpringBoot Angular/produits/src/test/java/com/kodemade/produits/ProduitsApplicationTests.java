package com.kodemade.produits;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.kodemade.produits.model.Categorie;
import com.kodemade.produits.model.Produit;
import com.kodemade.produits.repository.ProduitRepository;

@SpringBootTest
class ProduitsApplicationTests {

    @Autowired
    private ProduitRepository produitRepository;

    @Test
    public void testCreateProduit() {
        Produit prod = new Produit("PC Dell", 2200.500, new Date());
        produitRepository.save(prod);
    }

    @Test
    public void testFindProduit() {
        Produit p = produitRepository.findById(2L).get();
        System.out.println(p);
    }

    @Test
    public void testUpdateProduit() {
        Produit p = produitRepository.findById(2L).get();
        p.setPrixProduit(1000.0);
        produitRepository.save(p);
    }

    @Test
    public void testDeleteProduit() {
        produitRepository.deleteById(2L);
        ;

    }

    @Test
    public void testListerTousProduits() {
        List<Produit> prods = produitRepository.findAll();
        for (Produit p : prods) {
            System.out.println(p);
        }
    }

    @Test
    public void testFindByNomProduit() {
        List<Produit> prods = produitRepository.findByNomProduit("iphone X");
        for (Produit p : prods) {
            System.out.println(p);
        }

    }

    @Test
    public void testFindByNomProduitContains() {
        List<Produit> prods = produitRepository.findByNomProduitContains("PC Dell");
        for (Produit p : prods) {
            System.out.println(p);
        }

        assertTrue(prods.size() != 0);
    }

    @Test
    public void testfindByNomPrix() {
        List<Produit> prods = produitRepository.findByNomPrix("iphone X", 1000.0);
        for (Produit p : prods) {
            System.out.println(p);
        }
    }

    @Test
    public void testfindByCategorie() {
        Categorie cat = new Categorie();
        cat.setIdCat(1L);
        List<Produit> prods = produitRepository.findByCategorie(cat);
        for (Produit p : prods) {
            System.out.println(p);
        }
    }

    @Test
    public void findByCategorieIdCat() {
        List<Produit> prods = produitRepository.findByCategorieIdCat(1L);
        for (Produit p : prods) {
            System.out.println(p);
        }
    }

    @Test
    public void testfindByOrderByNomProduitAsc() {
        List<Produit> prods = produitRepository.findByOrderByNomProduitAsc();
        for (Produit p : prods) {
            System.out.println(p);
        }
    }

    @Test
    public void testTrierProduitsNomsPrix() {
        List<Produit> prods = produitRepository.findByOrderByNomProduitAscPrixProduitDesc();

        for (Produit p : prods) {
            System.out.println(p);
        }
    }
}
