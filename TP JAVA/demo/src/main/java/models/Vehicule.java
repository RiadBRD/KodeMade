package models;

abstract public class Vehicule {
    private String marque;
    private String modele;
    private String annee;

    public Vehicule(String marque, String annee, String modele) {
        this.marque = marque;
        this.annee = annee;
        this.modele = modele;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getAnnee() {
        return annee;
    }

    public void setAnnee(String annee) {
        this.annee = annee;
    }


}
