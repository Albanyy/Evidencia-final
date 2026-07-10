class CuentaBancaria {
    #titular;
    #numeroCuenta;
    #saldo;
    #historialMovimientos;

    constructor(titularInicial, numeroCuentaInicial, saldoInicial) {
        if (!titularInicial || typeof titularInicial !== "string") {
            throw new Error("El titular debe ser un texto valido");
        }
        if (!numeroCuentaInicial || typeof numeroCuentaInicial !== "string") {
            throw new Error("El numero de cuenta debe ser un texto valido");
        }
        if (typeof saldoInicial !== "number" || saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo");
        }

        this.#titular = titularInicial;
        this.#numeroCuenta = numeroCuentaInicial;
        this.#saldo = saldoInicial;
        this.#historialMovimientos = [];
    }

    consultarSaldo() {
        return this.#saldo;
    }

    consultarTitular() {
        return this.#titular;
    }

    depositar(monto) {
        if (typeof monto !== "number" || monto <= 0) {
            console.log("El monto a depositar debe ser un numero positivo");
            return false;
        }
        this.#saldo = this.#saldo + monto;
        this.#historialMovimientos.push(`Deposito de: ${monto}`);
        return true;
    }

    retirar(monto) {
        if (typeof monto !== "number" || monto <= 0) {
            console.log("El monto a retirar debe ser un numero positivo");
            return false;
        }
        if (monto > this.#saldo) {
            console.log(`Fondos insuficientes para retirar ${monto}`);
            return false;
        }
        this.#saldo = this.#saldo - monto;
        this.#historialMovimientos.push(`Retiro de: ${monto}`);
        return true;
    }

    obtenerHistorial() {
        return [...this.#historialMovimientos];
    }

    static transferir(cuentaOrigen, cuentaDestino, monto) {
        if (!(cuentaOrigen instanceof CuentaBancaria) || !(cuentaDestino instanceof CuentaBancaria)) {
            console.log("Las cuentas de transferencia deben ser instancias validas");
            return false;
        }
        if (typeof monto !== "number" || monto <= 0) {
            console.log("El monto de transferencia debe ser positivo");
            return false;
        }
        
        if (cuentaOrigen.retirar(monto)) {
            cuentaDestino.depositar(monto);
            console.log(`Transferencia exitosa de ${monto} desde la cuenta de ${cuentaOrigen.consultarTitular()} hacia la cuenta de ${cuentaDestino.consultarTitular()}`);
            return true;
        }
        
        console.log("Transferencia fallida por fondos insuficientes");
        return false;
    }
}

const cuentaDePeppa = new CuentaBancaria("Peppa", "12345", 500);
const cuentaDePrueba = new CuentaBancaria("Carlos", "67890", 100);

cuentaDePeppa.depositar(200);
cuentaDePeppa.retirar(100);
console.log(`Saldo actual de Peppa: ${cuentaDePeppa.consultarSaldo()}`);
console.log("Historial de Peppa:", cuentaDePeppa.obtenerHistorial());

cuentaDePeppa.depositar(-50);
cuentaDePeppa.retirar(900);

CuentaBancaria.transferir(cuentaDePeppa, cuentaDePrueba, 150);

console.log(`Saldo final de Peppa: ${cuentaDePeppa.consultarSaldo()}`);
console.log(`Saldo final de Carlos: ${cuentaDePrueba.consultarSaldo()}`);