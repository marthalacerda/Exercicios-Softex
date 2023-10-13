/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/
const readline = require('readline-sync')
let nomeCompleto, anoNascimento
let continuar = true
nomeCompleto = readline.question('Digite nome completo: ')

while (continuar) {
    try {
        anoNascimento = parseInt(readline.question('Digite ano de nascimento: '))
        if (isNaN(anoNascimento) === false) {
            if (anoNascimento < 1922 || anoNascimento > 2022) {
                throw new Error('Ano deve ser entre 1922 e 2022')
            } else {
                continuar = false
            }
        } else {
            throw new Error('Digite algo válido')
        }        
    } catch (error) {
        console.log(error.message)
    }
}
console.log(`
--------------------------------------
${nomeCompleto}
Tem ou completará ${2023 - anoNascimento} anos no ano de 2023.
--------------------------------------
`)

