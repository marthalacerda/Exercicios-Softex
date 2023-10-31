import { DecoradorSanduiche } from "./decorador-sanduiche"

export class Carne extends DecoradorSanduiche {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Carne'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 3.5;
    }

}