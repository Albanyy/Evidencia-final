let formularioRegistro = document.querySelector("#formularioRegistro");
let campoNombre = document.querySelector("#campoNombre");
let campoCorreo = document.querySelector("#campoCorreo");
let campoEdad = document.querySelector("#campoEdad");
let campoTerminos = document.querySelector("#campoTerminos");

let errorNombre = document.querySelector("#errorNombre");
let errorCorreo = document.querySelector("#errorCorreo");
let errorEdad = document.querySelector("#errorEdad");
let errorTerminos = document.querySelector("#errorTerminos");
let mensajeExito = document.querySelector("#mensajeExito");

formularioRegistro.addEventListener("submit", (objetoEvento) => {
    objetoEvento.preventDefault();

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorEdad.textContent = "";
    errorTerminos.textContent = "";
    mensajeExito.textContent = "";

    let datosFormulario = new FormData(formularioRegistro);
    let nombreValor = datosFormulario.get("nombre").trim();
    let correoValor = datosFormulario.get("correo").trim().toLowerCase();
    let edadValor = parseInt(datosFormulario.get("edad"));
    let terminosValor = datosFormulario.get("terminos");

    let esValido = true;
    let primerCampoInvalido = null;

    if (nombreValor === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        esValido = false;
        if (!primerCampoInvalido) primerCampoInvalido = campoNombre;
    }

    if (!correoValor.includes("@") || !correoValor.includes(".")) {
        errorCorreo.textContent = "El correo no es valido.";
        esValido = false;
        if (!primerCampoInvalido) primerCampoInvalido = campoCorreo;
    }

    if (isNaN(edadValor) || edadValor < 18) {
        errorEdad.textContent = "Debes ser mayor de edad.";
        esValido = false;
        if (!primerCampoInvalido) primerCampoInvalido = campoEdad;
    }

    if (!terminosValor) {
        errorTerminos.textContent = "Debes aceptar los terminos.";
        esValido = false;
        if (!primerCampoInvalido) primerCampoInvalido = campoTerminos;
    }

    if (esValido) {
        mensajeExito.textContent = "Registro procesado con exito.";
    } else if (primerCampoInvalido) {
        primerCampoInvalido.focus();
    }
});