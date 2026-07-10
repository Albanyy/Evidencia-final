let opcion = 3; 
let area = "";
let prioridad = "";
let tiempoEstimado = "";
let esUrgente = true;

switch (opcion) {
    case 1:
        area = "Ayuda General";
        prioridad = "Baja";
        tiempoEstimado = "1 dia";
        break;
    case 2:
    case 3:
        area = "Caja y Pagos";
        prioridad = "Media";
        tiempoEstimado = "2 dias";
        break;
    case 4:
        area = "Devoluciones";
        if (esUrgente === true) {
            prioridad = "Urgente";
            tiempoEstimado = "1 hora";
        } else {
            prioridad = "Normal";
            tiempoEstimado = "4 horas";
        }
        break;
    case 5:
        area = "Ventas";
        prioridad = "Baja";
        tiempoEstimado = "3 horas";
        break;
    case 6:
        area = "Reclamos";
        prioridad = "Alta";
        tiempoEstimado = "1 dia";
        break;
    default:
        console.log("Opción inválida.");
        break;
}

if (area !== "") {
    console.log(`Área: ${area}\nPrioridad: ${prioridad}\nTiempo: ${tiempoEstimado}`);
}