const Id =12345n; //no debe cambiar porque el id es algo unico 
const nombreCompleto="Lulu Sanchez";//El nombre de una persona no cambia al iniciar sesion
const fecha = "1999-02-15";//La fecha de una persona no cambia al iniciar sesion
let puntosActivos=1;
let estaActivo=false;
let ultimoAcceso;
const miClave = Symbol("soy_clave");

console.log(`Id: ${Id} -> ${typeof Id}`);
console.log(`Nombre completo: ${nombreCompleto} -> ${typeof nombreCompleto}`);
console.log(`Fecha: ${fecha} -> ${typeof fecha}`);
console.log(`Punto acumulados: ${puntosActivos} -> ${typeof puntosActivos}`);
console.log(`¿Esta activo?: ${estaActivo} -> ${typeof estaActivo}`);
console.log(`Ultimo acceso: ${ultimoAcceso} -> ${typeof ultimoAcceso}`);
console.log(`Clave interna: ${miClave.toString()} -> ${typeof miClave}`);
puntosActivos=4;
ultimoAcceso=true;
console.log("Resumen");
console.log(`El usuario ${nombreCompleto} ahora tiene ${puntosActivos} puntos.`);


