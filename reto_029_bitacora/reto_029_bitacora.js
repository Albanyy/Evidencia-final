let fechaActual = new Date();
let listaFechasVencimiento = [new Date("2026-07-01"), new Date("2026-07-15"), new Date("2026-06-25")];

let formateadorFechaColombia = new Intl.DateTimeFormat("es-CO");

let listaReportesProcesados = listaFechasVencimiento.map(fechaVencimiento => {
    let diferenciaEnMilisegundos = fechaVencimiento - fechaActual;
    let diasRestantes = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    let estadoUrgencia = "estable";
    if (diasRestantes < 0) estadoUrgencia = "vencido";
    else if (diasRestantes <= 3) estadoUrgencia = "urgente";
    else if (diasRestantes <= 7) estadoUrgencia = "próximo";

    return { 
        fechaObjeto: fechaVencimiento, 
        fechaFormateadaTexto: formateadorFechaColombia.format(fechaVencimiento), 
        diasCalculados: diasRestantes, 
        estadoFinal: estadoUrgencia 
    };
});

let reportesOrdenadosCronologicamente = [...listaReportesProcesados].sort((primerReporte, segundoReporte) => {
    return primerReporte.fechaObjeto - segundoReporte.fechaObjeto;
});

reportesOrdenadosCronologicamente.forEach(reporte => {
    console.log(`Fecha: ${reporte.fechaFormateadaTexto}\nDías: ${reporte.diasCalculados}\nEstado: ${reporte.estadoFinal}`);
});