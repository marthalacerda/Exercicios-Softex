import readline from 'readline-sync';

console.log(`
TABUADA
-----------------
`)

try {
    let num = parseFloat(readline.question('Digite um numero inteiro positivo: '));
    if (!isNaN(num)) {    
        if (Number.isInteger(num)) {
            if (num > 0) {
                for (let i = 1; i <= 10; i++) {
                    console.log(`${num} x ${i} = ${num*i}`)
                }
            } else {
                throw new Error('Valor digitado é negativo.')
            }
        } else {
            throw new Error('Valor digitado não é um número inteiro.')
        }
    } else {
        throw new Error('Valor digitado não é um número')
    }
} catch (error) {
    console.log('Erro: ', error.message);
} finally {
    console.log('Agradecemos a preferencia. Volte sempre!');
}
