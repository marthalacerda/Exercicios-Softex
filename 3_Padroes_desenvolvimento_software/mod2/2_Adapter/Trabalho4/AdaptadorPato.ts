import { IGalinha } from "./IGalinha";
import { Pato } from "./Pato";

export class AdaptadorPato implements IGalinha {

    constructor(private pato: Pato) {}

    cacarejar(): void {
        console.log(`O pato, fantasiado de galinha: `);
        this.pato.grasnar();
    }
    andar(): void {
        console.log(`O pato, fantasiado de galinha: `);
        this.pato.voar();
    }
    
}