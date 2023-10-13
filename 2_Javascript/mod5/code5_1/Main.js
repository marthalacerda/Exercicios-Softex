// Mínimo de 3 atributos e 3 métodos para cada objeto:

// 2 objetos materiais: Carro e Smartphone
// 2 objetos abstratos: Conta e Musica

import { Carro } from "./Carro.js";
import { Smartphone } from "./Smartphone.js";
import { Conta } from "./Conta.js";
import { Musica } from "./Musica.js";

// carro
const carro = new Carro('Fiat', 'Siena', 2009);
console.log(`Carro criado:`);
console.log(carro);
carro.acelerar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.freiar();
console.log(`Carro criado:`);
console.log(carro);
carro.desligar();

console.log();
console.log('-------------------');

// smartphone
const celular = new Smartphone('Motorola', 'G22');
console.log('Smartphone criado:');
console.log(celular);
celular.ligar();
celular.carregarBateria();
console.log(celular);
celular.desligar();

console.log();
console.log('-------------------');

// musica
const musica = new Musica('Equalize', 'Pitty', '3:38');
console.log('Musica criada:');
console.log(musica);
musica.reproduzir();
musica.reproduzir();
musica.avaliarDe0a5(5);
musica.pausar();
console.log(musica);

console.log();
console.log('-------------------');

// conta
const conta = new Conta('12345-5', 'Martha Lacerda');
console.log('Conta criada:');
console.log(conta);
conta.depositar(1500);
conta.consultarSaldo();
conta.sacar(741.66);
conta.consultarSaldo();
conta.sacar(1000);
console.log(conta);
