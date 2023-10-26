import { Veiculo } from "./veiculo";

export class Bicicleta extends Veiculo {
    
    private _numeroMarchas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroMarchas: number) {
        super(modelo, marca, cor, numeroRodas);
        this._numeroMarchas = numeroMarchas;
    }

    public represent(): string {
        return `modelo: ${this.modelo} - marca: ${this.marca} - cor: ${this.cor} - rodas: ${this.numeroRodas} - marchas: ${this.numeroMarchas}`;
    }

    // getters e setters
    get numeroMarchas(): number {
        return this._numeroMarchas;
    }
    set numeroMarchas(val: number) {
        this._numeroMarchas = val;
    }
    

}