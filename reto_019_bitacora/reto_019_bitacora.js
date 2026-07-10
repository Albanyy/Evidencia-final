let carrito = [];
// push agrega al final este método cambia la lista original
carrito.push("Manzana", "Leche", "Pan", "Huevos");
// unshift agrega al inicio este método cambia la lista original
carrito.unshift("Café");

// pop saca el último y lo guarda este método cambia la lista original
let productoEliminado = carrito.pop();
// splice cambia un producto del medio este método cambia la lista original
carrito.splice(2, 1, "Queso");
// slice toma un pedazo de la lista este método no cambia la lista original
let copiaCarrito = carrito.slice(0, 3);

console.log("Carrito actual:", carrito);
console.log("Copia parcial:", copiaCarrito);
console.log("Producto eliminado:", productoEliminado);
console.log("Total de productos (length):", carrito.length);

//Revisar si un producto está en la lista usando includes
console.log("¿Hay Pan en el carrito?:", carrito.includes("Pan"));
