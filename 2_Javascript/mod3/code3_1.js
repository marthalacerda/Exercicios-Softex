import readline from 'readline-sync';

// funções tradicionais
function pedirNumero() {
    return readline.questionFloat('Digite numero: ');
}
function pedirOperador() {
    let operador, continuar;
    continuar = true;
    while (continuar) {
        operador = readline.question('Digite um dos operadores [+]  [-]  [*]  [/] : ');
        switch (operador) {
            case '+':
                continuar = false;
                return '+';
            case '-':
                continuar = false;
                return '-';
            case '*':
                continuar = false;
                return '*';
            case '/':
                continuar = false;
                return '/';
            default:
                console.log('Operador inválido.');
                break;
        }    
    }
}
function menuCalculadora() {
    console.log(`
  CALCULADORA
-----------------------
- Digite 2 numeros
- Digite a operação
- Descubra o resultado
-----------------------
`);
}

// função tradicional com parametros e retorno de valor
function divisao(num1, num2) {
    if (num2 !== 0) {
        return (num1 / num2).toFixed(2);
    } else {
        return 'Erro. Divisão por zero.'
    }
}

// arrow function com parametros e retorno de valor
const calc = (op, [a, b] = [num1, num2]) => `${a} ${op} ${b} = ` + eval(`${a} ${op} ${b}`);

// programa
menuCalculadora();
let num1 = pedirNumero();
let num2 = pedirNumero();
let operador = pedirOperador();
console.log()
if (operador === '/') {
    console.log(`${num1} ${operador} ${num2} = ${divisao(num1, num2)}`);
} else {
    console.log(calc(operador));
}
