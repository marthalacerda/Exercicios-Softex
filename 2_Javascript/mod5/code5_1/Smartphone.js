class Smartphone {

    // construtor
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 50;
        this.ligado = false;
    }

    // metodos
    ligar() {
        this.ligado = true;
        console.log('- Ligando o seu telefone...')
    }
    desligar() {
        this.ligado = false;
        console.log('- Desligando o seu telefone...')
    }
    carregarBateria() {
        this.bateria = 100;
        console.log('- Bateria carregada em 100%.')
    }
}
export {Smartphone};