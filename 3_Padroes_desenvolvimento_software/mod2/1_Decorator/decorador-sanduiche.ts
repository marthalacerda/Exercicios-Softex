import { ISanduiche } from "./isanduiche";

export class DecoradorSanduiche implements ISanduiche {
    constructor(protected sanduiche: ISanduiche) {}

    getPreco(): number {
        return this.sanduiche.getPreco();
    }
    getNome(): string {
        return this.sanduiche.getNome();
    }

    
}