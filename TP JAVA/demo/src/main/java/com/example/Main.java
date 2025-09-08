package com.example;

import models.Garage;
import models.Moto;
import models.Voiture;
import models.VoitureElectrique;

public class Main {
    public static void main(String[] args) {

        MyGarage();
    }

    public static void MyGarage(){
        Garage garage = new Garage();

        // Voitures
        garage.ajouterUnVehicule(new Voiture("Toyota", "2018", "Corolla", 5));
        garage.ajouterUnVehicule(new Voiture("Peugeot", "2020", "308", 5));
        garage.ajouterUnVehicule(new Voiture("BMW", "2021", "X5", 7));

        // Motos
        garage.ajouterUnVehicule(new Moto("Yamaha", "2019", "MT-07", "689"));
        garage.ajouterUnVehicule(new Moto("Honda", "2017", "CBR 600RR", "599"));
        garage.ajouterUnVehicule(new Moto("Kawasaki", "2022", "Z900", "948"));

        // Voitures électriques
        garage.ajouterUnVehicule(new VoitureElectrique("Tesla", "2021", "Model 3", 5, 75.0));
        garage.ajouterUnVehicule(new VoitureElectrique("Renault", "2020", "Zoe", 5, 52.0));
        garage.ajouterUnVehicule(new VoitureElectrique("Volkswagen", "2022", "ID.4", 5, 77.0));

        garage.infosVehicules();




    }
}