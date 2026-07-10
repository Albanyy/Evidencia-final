let movimientos=[
    {fecha: "8/07/26",tipo:"gasto",categoria: "comida",valor: 20},
    {fecha: "1/04/26",tipo:"ingreso",categoria: "entretenimiento",valor: 90},
    {fecha: "24/011/26",tipo:"gasto",categoria: "impuestos",valor: 200000000000000},
    {fecha: "8/03/26",tipo:"ingreso",categoria: "sueldo",valor: 1},
    {fecha: "17/07/26",tipo:"gasto",categoria: "comida",valor: 50}
]

calcularMovimientos= movimientos.reduce((acumulador,movimiento) =>{

    if(movimiento.tipo === "ingreso"){
        acumulador.balance += movimiento.valor;
        acumulador.ingresos += movimiento.valor
    }

    if(movimiento.tipo === "gasto"){
        acumulador.balance -= movimiento.valor;
        acumulador.gastos += movimiento.valor
    }

    return acumulador;

},{ ingresos: 0, gastos: 0, balance: 0 })

const gastosPorCategoria = movimientos.reduce((acumulador, movimiento) => {

    const categoriaMoviento = movimiento.categoria

    if(!acumulador[categoriaMoviento]){
        acumulador[categoriaMoviento]=0;
    }

    acumulador[categoriaMoviento] += movimiento.valor;
    return acumulador;

},{});

let superaLimite = movimientos.find(movimiento => movimiento.valor >10 && movimiento.tipo === "gasto");
superaLimite = superaLimite ? superaLimite.categoria : "No se encontro algo que supere el limte";

const ordenadoValor = [...movimientos].sort((a,b)=> {
    return b.valor - a.valor;
})

const primerosDos = ordenadoValor.slice(0,2);

console.log("Calular movimientos:");
console.table(calcularMovimientos);

console.log("Gastos por categoria:");
console.table(gastosPorCategoria);


console.log("Movimiento que supera el limite:", superaLimite);


console.log("Los dos mas altos:");
console.table(primerosDos);
