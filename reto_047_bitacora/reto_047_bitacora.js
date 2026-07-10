function procesarPedido(pedido, onSuccess, onError) {
    setTimeout(() => {
        if (pedido.existencia === true && pedido.total > 0) {
            onSuccess("Tu pedido se proceso");
        } else {
            onError("Hubo un problema");
        }
    }, 3000);
}

const pedido1 = {
    existencia: true,
    total: 15000
};

const pedido2 = {
    existencia: false, 
    total: 50000
};

const pedido3 = {
    existencia: true,
    total: -100 
};

const exito = (mensaje) => {
    console.log("exito:", mensaje);
};

const error = (mensaje) => {
    console.log("error:", mensaje);
};

console.time("Tiempo pedido 1");

procesarPedido(pedido1, (mensaje) => {
    console.log("exito:", mensaje);
    console.timeEnd("Tiempo pedido 1"); 
}, error);

console.time("Tiempo pedido 2");

procesarPedido(pedido2, (mensaje) => {
    console.log("exito:", mensaje);
    console.timeEnd("Tiempo pedido 2"); 
}, error);

console.time("Tiempo pedido 3");

procesarPedido(pedido3, (mensaje) => {
    console.log("exito:", mensaje);
    console.timeEnd("Tiempo pedido 3"); 
}, error);

/* 
Si empezamos a meter un callback dentro de otro el código se vuelve un 
desastre y empieza a crecer para el lado como una pirámide y es dificil de leer y de corregir si algo falla por eso es mejor usar promesas.
*/


