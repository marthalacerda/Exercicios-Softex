//banco

const banco = {
    conta: '12345-5',
    saldo: 500.00,
    tipoDeConta: 'Conta Corrente',
    agencia: '123-4',
    buscarSaldo: function () {
        return this.saldo;
    },
    deposito: function(valor) {
        this.saldo += valor;
    },
    saque: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente.');
        }
    },
    numeroDaConta: function () {
        return this.conta;
    }
}
console.log(`Informações da conta:`);
console.log(`- Numero: ${banco.numeroDaConta()}`);
console.log(`- Agência: ${banco.agencia}`);
console.log(`- Tipo: ${banco.tipoDeConta}`);
console.log(`- Saldo: ${banco.buscarSaldo()}`);
console.log();
console.log(`- (Depositando 400,00...) `);
banco.deposito(400);
console.log(`- Saldo: ${banco.buscarSaldo()}`);
console.log(`- (Sacando 750,00...) `);
banco.saque(750);
console.log(`- Saldo: ${banco.buscarSaldo()}`);



