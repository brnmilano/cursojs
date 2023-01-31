class Conta {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }

    depositoContaCorrente(valor) {
        this.saldoCorrente += valor;
    }

    saqueContaCorrente(valor) {
        this.saldoCorrente -= valor;
    }

    depositoContaPoupanca(valor) {
        this.saldoPoupanca += valor;
    }

    saqueContaPoupanca(valor) {
        this.saldoPoupanca -= valor;
    }

    transferenciaPoupanca(valor) {
        this.saldoPoupanca += valor;
        this.saldoCorrente -= valor;
    }

    transferenciaCorrente(valor) {
        this.saldoCorrente += valor;
        this.saldoPoupanca -= valor;
    }

    jurosAniversario() {
        let juros = (this.saldoPoupanca * this.juros) / 100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super(saldoCorrente, saldoPoupanca, juros * 2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(`Valor na conta CORRENTE: ${conta.saldoCorrente}`);
console.log(`Valor na conta POUPANÇA: ${conta.saldoPoupanca}`);

console.log("");

conta.depositoContaCorrente(1000);

console.log(`Após o deposito o saldo da conta CORRENTE é de: ${conta.saldoCorrente}`);

conta.saqueContaCorrente(500);

console.log(`Após o saque o saldo da conta CORRENTE é de: ${conta.saldoCorrente}`);

console.log("");

conta.depositoContaPoupanca(2000);

console.log(`Após o deposito o da conta POUPANÇA total é de: ${conta.saldoPoupanca}`);

conta.saqueContaPoupanca(1000);

console.log(`Após o saque o saldo da conta POUPANÇA é de: ${conta.saldoPoupanca}`);

console.log("");

conta.transferenciaPoupanca(1500)

console.log(`Após a transfêrencia o saldo da conta POUPANÇA é de: ${conta.saldoPoupanca}`);

console.log(`Após a transfêrencia o saldo da conta CORRENTE é de: ${conta.saldoCorrente}`);

console.log("");

conta.transferenciaCorrente(5000)

console.log(`Após a transfêrencia o saldo da conta POUPANÇA é de: ${conta.saldoPoupanca}`);

console.log(`Após a transfêrencia o saldo da conta CORRENTE é de: ${conta.saldoCorrente}`);

console.log("");

conta.jurosAniversario();

console.log(conta);

let contaEspecial = new ContaEspecial(20000, 30000, 1)

console.log(contaEspecial);

contaEspecial.saqueContaPoupanca(10000);

console.log(contaEspecial);

contaEspecial.jurosAniversario();

console.log(contaEspecial);