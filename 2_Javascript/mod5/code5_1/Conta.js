class Conta {

    // construtor
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0.0;
    }

    // metodos
    depositar(valor) {
        this.saldo += valor;
        console.log(`- Depositando R$ ${valor.toFixed(2)}`);
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log('- Saldo insuficiente.');
        } else {
            this.saldo -= valor;
            console.log(`- Sacando R$ ${valor.toFixed(2)}`);
        }
    }
    consultarSaldo() {
        console.log(`- Saldo da conta: R$ ${this.saldo.toFixed(2)}`);
    }
}
export {Conta};