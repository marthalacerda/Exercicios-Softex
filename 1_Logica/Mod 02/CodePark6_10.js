
var qtdRodas = 4
var pesoVeiculo = 2000
var qtdPessoas = 5

if (qtdRodas === 2 || qtdRodas === 3) {
    console.log('Habilitação A')
} else if (qtdRodas === 4 && qtdPessoas <= 8 && pesoVeiculo <= 3500) {
    console.log('Habilitação B')
} else if (qtdRodas >= 4 && peso > 3500 && pesoVeiculo <= 6000) {
    console.log('Habilitação C')
} else if (qtdRodas >= 4 && qtdPessoas > 8) {
    console.log('Habilitação D')
} else if (qtdRodas >= 4 && pesoVeiculo > 6000) {
    console.log('Habilitação E')
}
