let botonIniciar = document.querySelector("#botonIniciar");
let botonPausar = document.querySelector("#botonPausar");
let botonReiniciar = document.querySelector("#botonReiniciar");
let textoFase = document.querySelector("#textoFase");
let textoCronometro = document.querySelector("#textoCronometro");

let identificadorIntervalo = null;
let faseActual = "Trabajo"; 
let tiempoRestanteSegundos = 25 * 60; 

function formatearTiempo(totalSegundos) {
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = totalSegundos % 60;
    let minutosTexto = minutos < 10 ? "0" + minutos : minutos;
    let segundosTexto = segundos < 10 ? "0" + segundos : segundos;
    return `${minutosTexto}:${segundosTexto}`;
    }

function actualizarInterfaz() {
    textoCronometro.textContent = formatearTiempo(tiempoRestanteSegundos);
    textoFase.textContent = faseActual;
}

function detenerIntervaloActivo() {
    if (identificadorIntervalo !== null) {
        clearInterval(identificadorIntervalo);
        identificadorIntervalo = null;
    }
}

botonIniciar.addEventListener("click", () => {
    if (identificadorIntervalo !== null) return;

    identificadorIntervalo = setInterval(() => {
        tiempoRestanteSegundos--;
        actualizarInterfaz();

        if (tiempoRestanteSegundos === 0) {
            detenerIntervaloActivo();
            if (faseActual === "Trabajo") {
                faseActual = "Descanso";
                tiempoRestanteSegundos = 5 * 60;
            } else {
                faseActual = "Trabajo";
                tiempoRestanteSegundos = 25 * 60;
            }
            actualizarInterfaz();
        }
    }, 1000);
});

botonPausar.addEventListener("click", () => {
    detenerIntervaloActivo();
});

botonReiniciar.addEventListener("click", () => {
    detenerIntervaloActivo();
    faseActual = "Trabajo";
    tiempoRestanteSegundos = 25 * 60;
    actualizarInterfaz();
});