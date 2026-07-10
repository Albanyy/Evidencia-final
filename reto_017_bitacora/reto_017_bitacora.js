"use strict";
let mensajeGlobal = "Soy Global";

function probarAlcance(){
    let mensajeFuncion = "Soy de Función";
    console.log(mensajeFuncion);
    if (true) {
        let mensajeDelBloque = "Soy de Bloque";
        console.log(mensajeDelBloque);
    }
    try {
        console.log(mensajeDelBloque); 
    } catch (error) {
        console.log("Error atrapado con éxito:", error.message);
    }
}
console.log(mensajeGlobal);
probarAlcance();

