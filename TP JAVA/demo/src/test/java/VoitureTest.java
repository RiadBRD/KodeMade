import models.Voiture;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class VoitureTest {

    @Test
    public void testCreationVoiture(){
        Voiture v = new Voiture("Toyota", "2018", "Corolla", 5);
        assertEquals("Toyota",v.getMarque());
        assertEquals("2018",v.getAnnee());
        assertEquals("Corolla",v.getModele());
        assertEquals(5,v.getNombreDePlaces());

    }
}
