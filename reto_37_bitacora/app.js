let botonIncrementar = document.querySelector("#botonIncrementar");
let botonDisminuir = document.querySelector("#botonDisminuir");
let botonReiniciar = document.querySelector("#botonReiniciar");
let botonMover = document.querySelector("#botonMover");
let textoContador = document.querySelector("#textoContador");
let textoUltimoEvento = document.querySelector("#textoUltimoEvento");

let contadorValor = 0;

function actualizarPantalla(tipoDeEvento) {
    textoContador.textContent = contadorValor;
    textoUltimoEvento.textContent = tipoDeEvento;
    botonDisminuir.disabled = (contadorValor === 0);
}

function accionIncrementar(objetoEvento) {
    contadorValor++;
    actualizarPantalla(objetoEvento.type);
}

function accionDisminuir(objetoEvento) {
    if (contadorValor > 0) {
        contadorValor--;
    }
    actualizarPantalla(objetoEvento.type);
}

function accionReiniciar(objetoEvento) {
    contadorValor = 0;
    actualizarPantalla(objetoEvento.type);
}

function rastrearMovimientoRaton(objetoEvento) {
    textoUltimoEvento.textContent = objetoEvento.type;
}

botonIncrementar.addEventListener("click", accionIncrementar);
botonDisminuir.addEventListener("click", accionDisminuir);
botonReiniciar.addEventListener("click", accionReiniciar);

window.addEventListener("keydown", (objetoEvento) => {
    if (objetoEvento.key === "+") accionIncrementar(objetoEvento);
    if (objetoEvento.key === "-") accionDisminuir(objetoEvento);
    if (objetoEvento.key === "Escape") accionReiniciar(objetoEvento);
});

botonMover.addEventListener("mouseenter", rastrearMovimientoRaton);

setTimeout(() => {
    botonMover.removeEventListener("mouseenter", rastrearMovimientoRaton);
    botonMover.textContent = "Boton Movimiento (Desactivado)";
}, 10000);