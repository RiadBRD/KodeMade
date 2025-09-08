package models;

import java.util.ArrayList;
import java.util.List;

public class Garage {
    private List<Vehicule> vehicules;


    public Garage() {
        vehicules = new ArrayList<Vehicule>();
    }
    public void infosVehicules(){
        vehicules.forEach(System.out::println);
    }

    public void ajouterUnVehicule(Vehicule v){
        vehicules.add(v);
    }
}
