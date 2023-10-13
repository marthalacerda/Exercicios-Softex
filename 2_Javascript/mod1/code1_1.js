/*
cadastro de pesso com nome, salário, idade e se possui diploma.
- identificar os tipos das variáveis
- codigo com exemplos para cada variavel
*/
import readline from 'readline-sync';
//const readline = require("readline-sync")
let nome, salario, idade, possuiDiploma;
do {
    nome = readline.question('Digite o nome: ');
} while (nome.length === 0);
do {
    salario = readline.questionFloat('Digite o salario: ')
} while (salario <= 0);
do {
    idade = readline.questionInt('Digite idade: ')
} while (idade <= 0);
let resposta;
do {
    resposta = readline.questionInt('Possui diploma? 1-SIM 2-NAO: ')
} while (resposta !== 1 && resposta !== 2);
possuiDiploma = resposta === 1 ? true : false;
console.log(`
Nome: ${nome} : ${typeof nome}
Salario: ${salario} : ${typeof salario}
Idade: ${idade} : ${typeof idade}
Possui diploma: ${possuiDiploma} : ${typeof possuiDiploma}
`)