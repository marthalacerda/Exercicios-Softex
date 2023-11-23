// a interface calculadora-strategy é implementada pelas operações
// a calculadora tem como atributos os numeros e uma operação
// então a calculadora recebe os numeros, e aplica a estratégia da operação escolhida

import readline from 'readline-sync';
import { CalculadoraStrategy } from './Calculadora-Strategy';
import { Calculadora } from './calculadora';
import { Soma } from './Soma';
import { Subtracao } from './Subtracao';
import { Multiplicacao } from './Multiplicacao';

console.log('\n----- CALCULADORA -----');

let operacaoEscolhida: string;
const num1 = readline.questionInt('Digite o primeiro numero inteiro: ');
const num2 = readline.questionInt('Digite o segundo numero inteiro: ');
let strategy: CalculadoraStrategy;

do {
  operacaoEscolhida = readline.question('Qual operação deseja? (+, - ou *): ');
  switch (operacaoEscolhida) {
    case '+':
      strategy = new Soma();
      break;
    case '-':
      strategy = new Subtracao();
      break;
    case '*':
      strategy = new Multiplicacao();
      break;
    default:
      console.log('Por favor, digite uma das 3');
  }
  if (strategy !== undefined) {
    break;
  }
} while (true);

const calculadora = new Calculadora(num1, num2, strategy);
console.log(`\nResultado = ${calculadora.resultado()}\n`);



