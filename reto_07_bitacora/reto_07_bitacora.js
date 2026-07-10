let nombre=" lULU   saNCHez ";
let codigo = "20261054321";
let nombreArreglo = nombre.trim().split(/\s+/);
let primerNombre = nombreArreglo[0][0].toUpperCase() + nombreArreglo[0].slice(1).toLowerCase();
let primerApellido = nombreArreglo[1][0].toUpperCase() + nombreArreglo[1].slice(1).toLowerCase();
let usuario =primerNombre.toLowerCase()+primerApellido+codigo.slice(-4);
let correo = usuario.toLocaleLowerCase()+"@gmail.com";
console.log(`Nombre: ${primerNombre}`);
console.log(`Apellido: ${primerApellido}`);
console.log(`Codigo: ${codigo}`);
console.log(`Usuario: ${usuario}`);
console.log(`Correo instucional: ${correo}`);


