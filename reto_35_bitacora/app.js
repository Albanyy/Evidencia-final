let botonClaro = document.querySelector("#botonClaro");
let botonOscuro = document.querySelector("#botonOscuro");
let botonContraste = document.querySelector("#botonContraste");
let textoTemaActivo = document.querySelector("#textoTemaActivo");

function cambiarTemaPagina(claseTemaNueva, botonSeleccionado, nombreLegible) {
    document.body.classList.remove("tema-claro", "tema-oscuro", "tema-contraste");
    
    document.body.classList.add(claseTemaNueva);
    
    botonClaro.setAttribute("aria-pressed", "false");
    botonOscuro.setAttribute("aria-pressed", "false");
    botonContraste.setAttribute("aria-pressed", "false");
    
    botonSeleccionado.setAttribute("aria-pressed", "true");
    
    textoTemaActivo.textContent = nombreLegible;
}

botonClaro.addEventListener("click", () => {
    cambiarTemaPagina("tema-claro", botonClaro, "claro");
});

botonOscuro.addEventListener("click", () => {
    cambiarTemaPagina("tema-oscuro", botonOscuro, "oscuro");
});

botonContraste.addEventListener("click", () => {
    cambiarTemaPagina("tema-contraste", botonContraste, "alto contraste");
});