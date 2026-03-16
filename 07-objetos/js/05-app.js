
console.log("Hola mundo . Propiedades protegidas");

class CuentaBancaria {

    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial
    }

    // getters
    get saldo() {
        return this.#saldo
    }


    //setter
    set saldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo
    }

    mostrarSaldo(){
        console.log(`El saldo es: ${this.#saldo}`)
    }

    depositar(monto){
        this.#saldo += monto
    }

    retirar(monto){
        this.#saldo -= monto
    }

}

const cuenta = new CuentaBancaria("Ana", 3000)

console.log(cuenta.titular)
cuenta.mostrarSaldo(); // saldo inicial
cuenta.depositar(2000);
cuenta.mostrarSaldo(); // saldo despues del deposito
cuenta.retirar(500);
cuenta.mostrarSaldo(); // saldo despues de retirar
console.log(cuenta.saldo);
cuenta.saldo = 300000;
console.log(cuenta.saldo);
cuenta.mostrarSaldo(); 

