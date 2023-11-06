import { DecoradorSanduiche } from "./decorador-sanduiche";

export class Bacon extends DecoradorSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', bacon';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 1.99;
    }
}