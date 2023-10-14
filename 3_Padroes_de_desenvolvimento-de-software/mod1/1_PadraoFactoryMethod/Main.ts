import { Factory } from "./Factory";

// Utilizando fabrica para criar instancias
const computadorPc = Factory.criarComputador(8, 512, 3.4, "pc");
const computadorServer = Factory.criarComputador(32, 2000, 4.0, "server");

// Utilizando o toString específico de cada computador
console.log(computadorPc.toString());
console.log();
console.log(computadorServer.toString());
console.log();

// Testando um computador de tipo inexistente
const c = Factory.criarComputador(1, 1, 1, "oi");