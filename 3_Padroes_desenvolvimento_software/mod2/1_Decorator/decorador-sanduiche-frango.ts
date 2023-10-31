import { DecoradorSanduiche } from "./decorador-sanduiche"

export class FrangoAssado extends DecoradorSanduiche {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Frango Assado'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 4.5;
    }

}