// programa de calculadora

import readline from 'readline-sync';

let num1, num2, operador, resultado, continuar;
num1 = readline.questionFloat('Digite numero 1: ');
num2 = readline.questionFloat('Digite numero 2: ');
continuar = true;
while (continuar) {
    operador = readline.question('Digite um dos operadores [+]  [-]  [*]  [/] : ');
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            continuar = false;
            break;
        case '-':
            resultado = num1 - num2;
            continuar = false;
            break;
        case '*':
            resultado = num1 * num2;
            continuar = false;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Erro, divisão por zero.'
            } else {
                resultado = Math.trunc(num1 / num2);
            }
            continuar = false;
            break;
        default:
            console.log('Operador inválido.');
            break;
    }    
}
if (operador === '/' && num2 !== 0) {
    console.log(`${num1} ${operador} ${num2} = ${resultado} \nresto da divisão = ${num1 % num2}`);
} else {
    console.log(`${num1} ${operador} ${num2} = ${resultado}`);
}


const calc = (op, [a, b] = [num1, num2]) => `${a} ${op} ${b} = ` + eval(`${a} ${op} ${b}`);


