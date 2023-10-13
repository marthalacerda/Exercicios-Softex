/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

*/
const readline = require("readline-sync")
let continuar = true
let voto
let qtdVotosX = 0
let qtdVotosY = 0
let qtdVotosZ = 0
let qtdVotosNulo = 0
const candidato = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0
}
while (continuar) {
    try {
        // pedir o voto
        voto = parseInt(readline.question('Digite seu voto >>> '))
        if (isNaN(voto) === false) {
            // verifica o numero
            switch (voto) {
                case candidato.candidato_X:
                    qtdVotosX++
                    break
                case candidato.candidato_Y:
                    qtdVotosY++
                    break
                case candidato.candidato_Z:
                    qtdVotosZ++
                    break
                default:
                    qtdVotosNulo++
                    break
            }
            while (true) {
                let x = readline.questionInt('Continuar votando? 1-Sim / 2-Nao >> ')
                if (x === 1) {
                    continuar = true
                    break
                } else if (x === 2) {
                    continuar = false
                    break
                } else {
                    console.log('Resposta invalida. Digite 1 para sim ou 2 para não.')
                }
            }
        } else {
            throw new Error('Dados inválidos, vote novamente.')
        }
    } catch (error) {
        console.log(error.message)
    }
}
console.log(`
Resultado
----------------------------------
X obteve ${qtdVotosX} votos.
Y obteve ${qtdVotosY} votos.
Z obteve ${qtdVotosZ} votos.
Votos brancos e nulos obtiveram ${qtdVotosNulo} votos.
----------------------------------
`)
let vencedor
let maiorQtdDeVotos = 0
if (qtdVotosX > qtdVotosY && qtdVotosX > qtdVotosZ && qtdVotosX > qtdVotosNulo) {
        console.log('O candidato X é o vencedor!')
} else if (qtdVotosY > qtdVotosX && qtdVotosY > qtdVotosZ && qtdVotosY > qtdVotosNulo) {
        console.log('O candidato Y é o vencedor!')
} else if (qtdVotosZ > qtdVotosX && qtdVotosZ > qtdVotosY && qtdVotosZ > qtdVotosNulo) {
        console.log('O candidato Z é o vencedor!')
} else {
    console.log('a maioria foi de votos brancos e nulos.')
}

