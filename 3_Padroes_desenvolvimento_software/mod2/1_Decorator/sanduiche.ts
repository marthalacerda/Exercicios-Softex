import { ISanduiche } from "./isanduiche";

export class Sanduiche implements ISanduiche {
    private nome: string = 'Sanduíche'
    private preco: number = 0.0;
    
    getPreco(): number {
        return this.preco;
    }
    getNome(): string {
        return this.nome;
    }



}