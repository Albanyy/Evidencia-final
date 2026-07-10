const botonProcesar = document.getElementById('boton-procesar');
const botonDescargar = document.getElementById('boton-descargar');
const bloqueSalida = document.getElementById('bloque-salida');
let configuracionFinal = null;

botonProcesar.addEventListener('click', () => {
    const textoIngresado = document.getElementById('texto-area-json').value.trim();
    bloqueSalida.textContent = "";
    botonDescargar.style.display = "none";

    let datosParseados;
    try {
        datosParseados = JSON.parse(textoIngresado);
    } catch (error) {
        bloqueSalida.innerHTML = `<span style="color: red;">Error de sintaxis: El JSON está mal formado.</span>`;
        return;
    }

    if (typeof datosParseados !== 'object' || datosParseados === null || Array.isArray(datosParseados)) {
        bloqueSalida.innerHTML = `<span style="color: red;">Error de estructura: Debe ser un objeto válido.</span>`;
        return;
    }

    const valoresPorDefecto = {
        tema: "oscuro",
        idioma: "es",
        notificaciones: true
    };

    if (datosParseados.tema === undefined) datosParseados.tema = valoresPorDefecto.tema;
    if (datosParseados.idioma === undefined) datosParseados.idioma = valoresPorDefecto.idioma;
    if (datosParseados.notificaciones === undefined) datosParseados.notificaciones = valoresPorDefecto.notificaciones;

    if (typeof datosParseados.tema !== 'string') {
        bloqueSalida.innerHTML = `<span style="color: red;">Error: "tema" debe ser un texto.</span>`;
        return;
    }
    if (typeof datosParseados.idioma !== 'string') {
        bloqueSalida.innerHTML = `<span style="color: red;">Error: "idioma" debe ser un texto.</span>`;
        return;
    }
    if (typeof datosParseados.notificaciones !== 'boolean') {
        bloqueSalida.innerHTML = `<span style="color: red;">Error: "notificaciones" debe ser true o false.</span>`;
        return;
    }

    configuracionFinal = datosParseados;
    bloqueSalida.textContent = JSON.stringify(datosParseados, null, 4);
    botonDescargar.style.display = "inline-block";
});

botonDescargar.addEventListener('click', () => {
    if (!configuracionFinal) return;
    const archivoBlob = new Blob([JSON.stringify(configuracionFinal, null, 4)], { type: 'application/json' });
    const urlDescarga = URL.createObjectURL(archivoBlob);
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = urlDescarga;
    enlaceDescarga.download = 'config_normalizada.json';
    enlaceDescarga.click();
    URL.revokeObjectURL(urlDescarga);
});