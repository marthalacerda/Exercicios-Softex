import { DecoradorSanduiche } from "./decorador-sanduiche";

export class Pepperoni extends DecoradorSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', pepperoni';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 0.99;
    }
}