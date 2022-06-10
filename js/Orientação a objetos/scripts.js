class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = this._saldo + valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoDecredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoDecredito = cartaoDecredito;
    }

    get cartaoDecredito() {
        return this._cartaoDecredito;
    }

    set cartaoDecredito(valor) {
        this._cartaoDecredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitário';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação Negada";
        }
        this._saldo = this._saldo - valor;
    }
}