let elementoImagen = document.querySelector("#imagenUsuario");
let elementoNombre = document.querySelector("#nombreUsuario");
let elementoRol = document.querySelector("#rolUsuario");
let elementoCiudad = document.querySelector("#ciudadUsuario");
let elementoBiografia = document.querySelector("#biografiaUsuario");
let elementoLista = document.querySelector("#listaHabilidades");

elementoNombre.textContent = "Pepppa Gomez";
elementoRol.textContent = "Desarrolladora";
elementoCiudad.textContent = "Medellin";
elementoBiografia.textContent = "Estudiante de tecnologia en sistemas.";

elementoImagen.src = "imagen.jpg";
elementoImagen.alt = "Foto de perfil de Ana Gomez";

let listaHabilidadesData = ["Cocina","Existe","limpea","lava"];

listaHabilidadesData.forEach(habilidadTexto => {
    let nuevoElementoItem = document.createElement("li");
    nuevoElementoItem.textContent = habilidadTexto;
    elementoLista.append(nuevoElementoItem);
});