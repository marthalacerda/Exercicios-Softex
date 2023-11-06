import { DecoradorSanduiche } from "./decorador-sanduiche";

export class QueijoMussarelaRalado extends DecoradorSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', queijo mussarela ralado';
    }
    getPreco(): number {
        return this.sanduiche.getPreco() + 2.0;
    }
}