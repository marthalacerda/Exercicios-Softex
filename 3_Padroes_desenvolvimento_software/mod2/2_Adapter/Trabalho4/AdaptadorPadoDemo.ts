// crie um adaptador que permita que um objeto do tipo pato seja usado como se fosse um objeto do tipo galinha.
// crie as classes adaptadorpato e adaptadorpatodemo para demonstrar o uso da classe adaptadorpato

import { AdaptadorPato } from "./AdaptadorPato";
import { IPato } from "./IPato";
import { Pato } from "./Pato";

class AdaptadorPatoDemo {

    public static main(): void {
        const pato: IPato = new Pato();
        const patoAdaptadoParaGalinha: AdaptadorPato = new AdaptadorPato(pato);

        //O pato antes da adaptação:
        pato.grasnar();
        pato.voar();

        console.log()
        
        //O pato depois da adaptação, chamando os métodos da galinha:
        patoAdaptadoParaGalinha.cacarejar();
        patoAdaptadoParaGalinha.andar();
    }

}
AdaptadorPatoDemo.main();

