class Rango {
    constructor(inicioRango, finRango, pasoIncremento) {
        if (pasoIncremento === 0) {
            throw new Error("no puede ser cero");
        }
        this.inicioRango = inicioRango;
        this.finRango = finRango;
        this.pasoIncremento = pasoIncremento;
    }

    [Symbol.iterator]() {
        let posicionActual = this.inicioRango;
        const limiteFinal = this.finRango;
        const incremento = this.pasoIncremento;

        return {
            next() {
                const esPasoAscendente = incremento > 0;
                const haTerminadoRango = esPasoAscendente 
                    ? posicionActual > limiteFinal 
                    : posicionActual < limiteFinal;

                if (haTerminadoRango) {
                    return { value: undefined, done: true };
                }

                const valorRetorno = posicionActual;
                posicionActual = posicionActual + incremento;
                return { value: valorRetorno, done: false };
            }
        };
    }

    take(cantidadElementosSolicitados) {
        const iteradorBase = this[Symbol.iterator]();
        return {
            [Symbol.iterator]() {
                let elementosContados = 0;
                return {
                    next() {
                        if (elementosContados >= cantidadElementosSolicitados) {
                            return { value: undefined, done: true };
                        }
                        const resultadoIteracion = iteradorBase.next();
                        if (resultadoIteracion.done) {
                            return resultadoIteracion;
                        }
                        elementosContados = elementosContados + 1;
                        return resultadoIteracion;
                    }
                };
            }
        };
    }
}

const rangoAscendenteInstancia = new Rango(1, 5, 1);
for (const numeroIterado of rangoAscendenteInstancia) {
    console.log("Numero:", numeroIterado);
}

const rangoDescendenteInstancia = new Rango(10, 4, -2);
for (const numeroIterado of rangoDescendenteInstancia) {
    console.log("Numero descendente:", numeroIterado);
}

const rangoEstructuras = new Rango(0, 15, 5);
const arregloElementos = [...rangoEstructuras];
console.log("Arreglo completo mediante spread:", arregloElementos);
const [primerElemento, segundoElemento] = rangoEstructuras;
console.log("Desestructuracion de elementos:", primerElemento, segundoElemento);

const rangoGrande = new Rango(10, 100, 5);
const rangoRecortadoPerezoso = rangoGrande.take(3);
for (const numeroLimitado of rangoRecortadoPerezoso) {
    console.log("Valor tomado:", numeroLimitado);
}

try {
    new Rango(1, 10, 0);
} catch (error) {
    console.log("Captura de error:", error.message);
}