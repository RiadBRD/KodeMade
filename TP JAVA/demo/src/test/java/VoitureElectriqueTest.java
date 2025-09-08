import models.VoitureElectrique;
import org.junit.Test;

import java.util.Optional;

import static org.junit.Assert.assertEquals;

public class VoitureElectriqueTest {

    @Test
    public void testRechargeBatterie(){
        VoitureElectrique ve = new VoitureElectrique("Tesla", "2021", "Model 3", 5, 75.0);
        ve.recharger();
        assertEquals(Double.valueOf(100.0),ve.getBatterie());
    }
}
