package models;

public class Voiture extends Vehicule{

    private int nombreDePlaces;

    public Voiture(String marque, String annee, String modele,int nombreDePlaces) {
        super(marque, annee, modele);
        this.nombreDePlaces = nombreDePlaces;
    }

    public int getNombreDePlaces() {
        return nombreDePlaces;
    }

    public void setNombreDePlaces(int nombreDePlaces) {
        this.nombreDePlaces = nombreDePlaces;
    }

    @Override
    public String toString() {
        return "Voiture{" +
                "marque='" + getMarque() + '\'' +
                ", modele='" + getModele() + '\'' +
                ", annee='" + getAnnee() + '\'' +
                ", nombreDePlaces=" + nombreDePlaces +
                '}';
    }

}
