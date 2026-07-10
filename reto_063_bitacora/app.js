const estadoInicial = {
    usuario: {
        nombreCompleto: "Peppa Pig",
        autenticado: true
    },
    carritoProductos: [
        { identificador: 1, nombreProducto: "Cuaderno", cantidad: 2 }
    ],
    preferenciasInterfaz: {
        tema: "oscuro",
        idioma: "es"
    }
};

function cambiarTemaPreferencias(estadoActual, nuevoTema) {
    return {
        ...estadoActual,
        preferenciasInterfaz: {
            ...estadoActual.preferenciasInterfaz,
            tema: nuevoTema
        }
    };
}

function agregarProductoAlCarrito(estadoActual, nuevoProducto) {
    return {
        ...estadoActual,
        carritoProductos: [
            ...estadoActual.carritoProductos,
            nuevoProducto
        ]
    };
}

function actualizarCantidadProducto(estadoActual, identificadorProducto, nuevaCantidad) {
    return {
        ...estadoActual,
        carritoProductos: estadoActual.carritoProductos.map(producto => {
            if (producto.identificador === identificadorProducto) {
                return {
                    ...producto,
                    cantidad: nuevaCantidad
                };
            }
            return producto;
        })
    };
}

function reducerEstadoTienda(estadoActual, accionAsignada) {
    switch (accionAsignada.tipoAccion) {
        case "CAMBIAR_TEMA":
            return cambiarTemaPreferencias(estadoActual, accionAsignada.datosPayload);
        case "AGREGAR_PRODUCTO":
            return agregarProductoAlCarrito(estadoActual, accionAsignada.datosPayload);
        case "ACTUALIZAR_CANTIDAD":
            return actualizarCantidadProducto(
                estadoActual, 
                accionAsignada.datosPayload.identificadorProducto, 
                accionAsignada.datosPayload.nuevaCantidad
            );
        default:
            return estadoActual;
    }
}


const estadoVersionUno = cambiarTemaPreferencias(estadoInicial, "claro");
const estadoVersionDos = agregarProductoAlCarrito(estadoVersionUno, { identificador: 2, nombreProducto: "Lapicero", cantidad: 5 });
const estadoVersionTres = actualizarCantidadProducto(estadoVersionDos, 1, 4);

console.log("¿El estado inicial cambio?:", estadoInicial === estadoVersionUno);
console.log("¿Se conservaron los datos de usuario sin cambiar de referencia?:", estadoInicial.usuario === estadoVersionUno.usuario);
console.log("¿Cambio la referencia de preferencias al modificar el tema?:", estadoInicial.preferenciasInterfaz === estadoVersionUno.preferenciasInterfaz);
console.log("¿Cambio el carrito al agregar un producto?:", estadoVersionUno.carritoProductos === estadoVersionDos.carritoProductos);

const accionModificarTema = { tipoAccion: "CAMBIAR_TEMA", datosPayload: "azul" };
const estadoFinalConReducer = reducerEstadoTienda(estadoVersionTres, accionModificarTema);
console.log("Tema final obtenido mediante Reducer:", estadoFinalConReducer.preferenciasInterfaz.tema);