// calculadora de media

import readline from 'readline-sync';

// pedir as notas
let nota1, nota2, nota3, media;
do {
    nota1 = readline.questionFloat('Digite a nota 1: ');
} while (nota1 < 0 || nota1 > 10);
do {
    nota2 = readline.questionFloat('Digite a nota 2: ');
} while (nota2 < 0 || nota2 > 10);
do {
    nota3 = readline.questionFloat('Digite a nota 3: ');
} while (nota3 < 0 || nota3 > 10);

// calcular a media
media = (nota1 + nota2 + nota3) / 3;

// mostrar no console
console.log(`A média das notas ${nota1}, ${nota2} e ${nota3} é igual a ${media.toFixed(1)}`);
