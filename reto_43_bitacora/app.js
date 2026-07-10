let formularioNotas = document.querySelector("#formularioNotas");
let campoNotaTexto = document.querySelector("#campoNotaTexto");
let botonBorrarTodo = document.querySelector("#botonBorrarTodo");
let contenedorListaNotas = document.querySelector("#contenedorListaNotas");

function cargarNotasDeAlmacenamiento() {
    try {
        let datosJson = localStorage.getItem("mis_notas_guardadas");
        return datosJson ? JSON.parse(datosJson) : [];
    } catch (error) {
        return [];
    }
}

function guardarNotasEnAlmacenamiento(listaDeNotas) {
    localStorage.setItem("mis_notas_guardadas", JSON.stringify(listaDeNotas));
}

function renderizarNotasEnPantalla() {
    contenedorListaNotas.innerHTML = "";
    let listaDeNotas = cargarNotasDeAlmacenamiento();

    listaDeNotas.forEach(nota => {
        let elementoItem = document.createElement("li");
        elementoItem.textContent = `${nota.texto} (${nota.fecha}) `;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            eliminarNotaIndividual(nota.id);
        });

        elementoItem.append(botonEliminar);
        contenedorListaNotas.append(elementoItem);
    });
}

function agregarNuevaNota(objetoEvento) {
    objetoEvento.preventDefault();
    let listaDeNotas = cargarNotasDeAlmacenamiento();

    let nuevaNota = {
        id: Date.now(),
        texto: campoNotaTexto.value.trim(),
        fecha: new Date().toLocaleDateString("es-CO")
    };

    listaDeNotas.push(nuevaNota);
    guardarNotasEnAlmacenamiento(listaDeNotas);
    renderizarNotasEnPantalla();
    formularioNotas.reset();
}

function eliminarNotaIndividual(idNotaAEliminar) {
    let listaDeNotas = cargarNotasDeAlmacenamiento();
    let listaFiltrada = listaDeNotas.filter(nota => nota.id !== idNotaAEliminar);
    guardarNotasEnAlmacenamiento(listaFiltrada);
    renderizarNotasEnPantalla();
}

formularioNotas.addEventListener("submit", agregarNuevaNota);

botonBorrarTodo.addEventListener("click", () => {
    let confirmacionUsuario = confirm("¿Seguro que quieres borrar todas las notas?");
    if (confirmacionUsuario) {
        localStorage.removeItem("mis_notas_guardadas");
        renderizarNotasEnPantalla();
    }
});

renderizarNotasEnPantalla();