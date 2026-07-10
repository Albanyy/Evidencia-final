setTimeout(() => {
    console.log("Primer temporizador en la cola de macrotareas");
}, 0);

setTimeout(() => {
    console.log("Segundo temporizador en la cola de macrotareas");
}, 0);

Promise.resolve().then(() => {
    console.log("Primera promesa");
}).then(() => {
    console.log("Segunda promesa");
});

queueMicrotask(() => {
    console.log("Funcion queueMicrotask ");
});

async function ejecutarFuncionAsincrona() {
    await Promise.resolve();
    console.log("Promesa con await dentro de la funcion asincrona");
}
ejecutarFuncionAsincrona();

console.log("Fin");