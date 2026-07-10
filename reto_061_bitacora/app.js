function crearContador(valorInicial, pasoConfigurado) {
    if (typeof valorInicial !== "number" || Number.isNaN(valorInicial)) {
        throw new Error("El valor inicial debe ser un numero valido");
    }
    if (typeof pasoConfigurado !== "number" || Number.isNaN(pasoConfigurado) || pasoConfigurado <= 0) {
        throw new Error("El paso debe ser un numero positivo mayor a cero");
    }

    let contadorActual = valorInicial;
    const listaSuscriptores = [];

    function notificarCambio() {
        listaSuscriptores.forEach(funcionSuscriptor => funcionSuscriptor(contadorActual));
    }

    return {
        incrementar: function() {
            contadorActual = contadorActual + pasoConfigurado;
            notificarCambio();
            return contadorActual;
        },
        disminuir: function() {
            contadorActual = contadorActual - pasoConfigurado;
            notificarCambio();
            return contadorActual;
        },
        obtenerValor: function() {
            return contadorActual;
        },
        reiniciar: function() {
            contadorActual = valorInicial;
            notificarCambio();
            return contadorActual;
        },
        agregarSuscriptor: function(nuevaFuncionSuscriptor) {
            if (typeof nuevaFuncionSuscriptor === "function") {
                listaSuscriptores.push(nuevaFuncionSuscriptor);
            }
        }
    };
}

const contadorDePeppa = crearContador(10, 2);
const contadorDePrueba = crearContador(100, 25);

contadorDePeppa.agregarSuscriptor((nuevoValor) => {
    console.log(`Notificacion: El contador de Peppa ha cambiado a: ${nuevoValor}`);
});

contadorDePeppa.incrementar();
contadorDePeppa.incrementar();
contadorDePeppa.disminuir();
console.log("Valor final directo de Peppa:", contadorDePeppa.obtenerValor());

contadorDePrueba.incrementar();
console.log("Valor de prueba sin alterar a Peppa:", contadorDePrueba.obtenerValor());
console.log("Reconfirmamos valor de Peppa:", contadorDePeppa.obtenerValor());

contadorDePeppa.reiniciar();
console.log("Peppa despues de reiniciar:", contadorDePeppa.obtenerValor());

try {
    crearContador("texto", 5);
} catch (error) {
    console.log("Validacion exitosa:", error.message);
}