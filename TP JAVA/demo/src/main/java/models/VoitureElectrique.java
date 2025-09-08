package models;

import contracts.Electrique;

public class VoitureElectrique extends Voiture implements Electrique {
    private Double batterie;
    public VoitureElectrique(String marque, String annee, String modele,int nombreDePlaces,Double batterie) {
        super(marque, annee, modele,nombreDePlaces);
        this.batterie = batterie;
    }

    @Override
    public boolean recharger() {
        if(batterie==1000){
            System.out.println("La batterie est pleine !");
            return false;
        }
        this.batterie=100.0;
        return true;
    }

    public Double getBatterie() {
        return batterie;
    }

    public void setBatterie(Double batterie) {
        this.batterie = batterie;
    }

    @Override
    public String toString() {
        return "VoitureElectrique{" +
                "marque='" + getMarque() + '\'' +
                ", modele='" + getModele() + '\'' +
                ", annee='" + getAnnee() + '\'' +
                ", nombreDePlaces=" + getNombreDePlaces() +
                ", batterie=" + batterie + "%" +
                '}';
    }


}
