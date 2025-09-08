package models;

public class Moto extends Vehicule{

    private String cylindree;

    public Moto(String marque, String annee, String modele,String cylindree) {
        super(marque, annee, modele);
        this.cylindree = cylindree;
    }

    public String getCylindree() {
        return cylindree;
    }

    public void setCylindree(String cylindree) {
        this.cylindree = cylindree;
    }

    @Override
    public String toString() {
        return "Moto{" +
                "marque='" + getMarque() + '\'' +
                ", modele='" + getModele() + '\'' +
                ", annee='" + getAnnee() + '\'' +
                ", cylindree='" + cylindree + '\'' +
                '}';
    }

}
