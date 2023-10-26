

export abstract class Veiculo {

    private _modelo: string;
    private _marca: string;
    private _cor: string;
    private _numeroRodas: number 
    
    // construtor
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
        this._modelo = modelo;
        this._marca = marca;
        this._cor = cor;
        this._numeroRodas = numeroRodas;
    }
        
    // metodos clone e represent
    public clone(): this {
        let newObject = null;
        try {
            newObject = Object.create(this);
        } catch (e) {
            console.log(e);
        }
        return newObject;
    }

    // assumindo que represent seja para representar o objeto
    public abstract represent(): string;
        
    // getters e setters
    get modelo() {
      return this._modelo
    }    
    set modelo(val: string) {
      this._modelo = val
    }    
    get marca() {
      return this._marca
    }    
    set marca(val: string) {
      this._marca = val
    }    
    get cor() {
      return this._cor
    }    
    set cor(val: string) {
      this._cor = val
    }    
    get numeroRodas() {
      return this._numeroRodas
    }    
    set numeroRodas(val: number) {
      this._numeroRodas = val
    }


}