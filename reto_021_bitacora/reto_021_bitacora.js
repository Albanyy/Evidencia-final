let productos=[
    {nombre:"Camisa", categoria:"Ropa",disponible: true, descuento: 0.10,precio: 500},
    {nombre:"Televisor", categoria:"Electrodomesticos",disponible: false, descuento: 0.20 , precio:100},
    {nombre:"Zapatos", categoria:"Ropa", disponible:true, descuento: 0.15,precio: 50},
    {nombre:"Microondas", categoria:"Electrodomesticos", disponible: true, descuento: 0.7,precio: 4000}
]



let disponiblesDescuento = productos.filter(p => p.disponible === true && p.descuento >=0.15);

let precioDescuesto = disponiblesDescuento.map(producto => {

    let operacionDescuento= producto.precio * producto.descuento;
    return{
        ...producto,
        precioFinal: producto.precio-operacionDescuento
    };
});

let ordenadosPrecio= [...precioDescuesto].sort((a,b)=> a.precioFinal - b.precioFinal);

ordenadosPrecio.forEach(p=>{
    console.log(`----------\n Nombre: ${p.nombre} \n Categoria: ${p.categoria} \n Disponible: ${p.disponible? "si" : "no"}\n Precio: ${p.precioFinal}`);
})

console.log(ordenadosPrecio);















