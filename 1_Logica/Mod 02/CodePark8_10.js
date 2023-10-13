/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

*/

const readline = require('readline-sync')
let opcao = -1
let continuar = true
while (continuar) {
    console.log('____CALCULADORA____')
    console.log(`
    1: Soma
    2: Subtração
    3: Multiplicação
    4: Divisão
    0: Sair
    
    `)
    opcao = readline.questionInt('Escolha uma das opcoes: ')
    
    let numero1, numero2
    if (opcao > 0 && opcao <= 4) {
        numero1 = readline.questionFloat('Digite primeiro numero: ')
        numero2 = readline.questionFloat('Digite o segund numero: ')
    }

    switch (opcao) {
        case 1:
            console.log(`${numero1} + ${numero2} = ${numero1+numero2}`)
            break
        case 2:
            console.log(`${numero1} - ${numero2} = ${numero1-numero2}`)                
            break
        case 3:
            console.log(`${numero1} * ${numero2} = ${numero1*numero2}`)                
            break
        case 4:
            if (numero2 !== 0) {
                console.log(`${numero1} / ${numero2} = ${numero1/numero2}`)  
            } else {
                console.log("Erro: Divisão por zero.")
            }        
            break
        case 0:
            console.log('Saindo da calculadora...')
            continuar = false
            break
        default:
            console.log("Essa opcao não existe.")
    }   
    
}


try {
    var numero = 5
    console.log(nome)
    console.log(numero)
} catch (error) {
    console.log('ocorreu um erro: ' + error.message)
}

var numero_correto, num
numero_correto = false
while(numero_correto === false) {
    try {
        num = parseInt(readline.question('Insira numero par: '))
        if (isNaN(num) === false) {
            if (num % 2 === 0) {
                numero_correto = true
                console.log('digitou numero par!')
            } else {
                numero_correto = false
                console.log('digitou numero impar')
            }
        } else {
            throw new Error('Valor digitado não é numero valido')
        }
    } catch (error) {
       console.log(error)
       console.log('valor invalido') 
    }
}