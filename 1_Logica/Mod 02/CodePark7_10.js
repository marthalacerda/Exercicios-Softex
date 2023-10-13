/*
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.
*/

console.log('Contagem regressiva de 7 segundos:')
for (let i = 7; i > 0; i--) {
    console.log(`... ${i} ...`)
}
console.log('... BUM!!')

