import { Bicicleta } from "./bicicleta";
import { Carro } from "./carro";
import { Veiculo } from "./veiculo";

class Aplicacao {

    // criar um array com 6 veiculos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array
    static criarArrayComSeisVeiculos(): Veiculo[] {
        const carro = new Carro('Sedan', 'Toyota', 'Azul', 4, 4);
        const bicicleta = new Bicicleta('Mountain Bike', 'Treck', 'Verde', 2, 21);

        const veiculos = [carro.clone(), carro.clone(), carro.clone(), bicicleta.clone(), bicicleta.clone(), bicicleta.clone()];

        return veiculos;
    }

    // implemente um método que retorne um array com o mesmo tamanho do array de veiculos, onde cada elemento deve ser um clone dos elementos do array veiculos
    static clonesDeVeiculo(arrayASerClonado: Veiculo[]): Veiculo[] {
        return arrayASerClonado.map((elemento) => elemento.clone());
    }

    // no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veiculos
    static imprimirNaTela(arrayASerImpresso: Veiculo[]) {
        arrayASerImpresso.forEach((element) => console.log(element.represent()));
    }
  
    
}

// programa
const veiculos = Aplicacao.criarArrayComSeisVeiculos();

veiculos[1].cor = 'Vermelho';
veiculos[2].cor = 'Amarelo';
veiculos[3].cor = 'Branco';
veiculos[4].cor = 'Rosa-Choque';
veiculos[5].cor = 'Púrpura';

const veiculosClonados = Aplicacao.clonesDeVeiculo(veiculos);

console.log('VEICULOS NO PRIMEIRO ARRAY');
Aplicacao.imprimirNaTela(veiculos);

console.log('\nVEICULOS NO ARRAY CLONADO');
Aplicacao.imprimirNaTela(veiculosClonados);
