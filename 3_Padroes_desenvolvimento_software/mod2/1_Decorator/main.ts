


import { Bacon } from "./decorador-sanduiche-bacon";
import { Carne } from "./decorador-sanduiche-carne";
import { FrangoAssado } from "./decorador-sanduiche-frango";
import { Pepperoni } from "./decorador-sanduiche-pepperoni";
import { QueijoMussarelaRalado } from "./decorador-sanduiche-queijoMussarela-Ralado";
import { Sanduiche } from "./sanduiche";

console.log(`
Cardápio:
- Sanduiche de carne: $3,50
- Sanduiche de frango assado: $4,50
--- adicional de bacon: $1,99
--- adicional de pepperoni: $0,99
--- adicional de queijo mussarela ralado: $2,00
`);

const sanduiche = new Sanduiche();

// sanduíche de carne com bacon e queijo
const deCarneBaconQueijo = new QueijoMussarelaRalado(new Bacon(new Carne(sanduiche)));
console.log(`${deCarneBaconQueijo.getNome()} custa ${deCarneBaconQueijo.getPreco()}`);

// sanduíche de frango com pepperoni e queijo
const deFrangoPepperoniQueijo = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado(sanduiche)));
console.log(`${deFrangoPepperoniQueijo.getNome()} custa ${deFrangoPepperoniQueijo.getPreco()}`);

console.log()