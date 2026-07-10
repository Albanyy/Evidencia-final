let exitos = 0;
let fallos = 0;

function retirar(saldo, monto) {
    if (typeof monto !== "number" || isNaN(monto)) {
        throw new TypeError("No es número");
    }
    if (monto <= 0) {
        throw new RangeError("Monto no positivo");
    }
    if (monto > saldo) {
        throw new Error("Fondos insuficientes");
    }

    return saldo - monto;
}

function probar(saldo, monto) {
    try {
        let nuevoSaldo = retirar(saldo, monto);
        console.log(`Exitoso. Saldo: ${nuevoSaldo}`);
        exitos++;
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        } else {
            console.log("Error desconocido");
        }
        fallos++;
    } finally {
        console.log("Operacion terminada");
    }
}

probar(500000, "cien mil");
probar(500000, -20000);
probar(100000, 150000);
probar(300000, 50000);

console.log(`Exitos: ${exitos}`);
console.log(`Fallos: ${fallos}`);