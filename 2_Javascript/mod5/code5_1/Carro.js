class Carro {

    // construtor
    constructor(marca, modelo, anoDeFabricacao) {
        // atributos
        this.marca = marca;
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.velocidade = 0;
        this.estaLigado = false;
    }

    // metodos
    acelerar() {
        if (this.estaLigado) {
            this.velocidade += 10;
            console.log('- Aumentando a velocidade...');
        } else {
            console.log('- O carro está desligado!');
        }
    }
    freiar() {
        if (this.estaLigado) {
            if (this.velocidade < 10) {
                this.velocidade = 0;
                console.log('- O carro parou.');
            } else {
                this.velocidade -= 10;
                console.log('- Diminuindo a velocidade...');
            }
        } else {
            console.log('- O carro está desligado!');
        }
    }
    ligar() {
        this.estaLigado = true;
        console.log('- Ligando o carro...');
    }
    desligar() {
        this.estaLigado = false;
        console.log('- Desligando o carro...');
    }
}
export {Carro};