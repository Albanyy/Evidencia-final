const claveAlmacenamientoLocalEstudiantes = "sistema_notas_estudiantes_v1";
const claveAlmacenamientoLocalCursos = "sistema_notas_cursos_v1";
const claveAlmacenamientoLocalCalificaciones = "sistema_notas_calificaciones_v1";

function obtenerDatosDesdeAlmacenamientoLocal(claveDeBusqueda) {
    const datosObtenidosEnCadena = localStorage.getItem(claveDeBusqueda);
    if (datosObtenidosEnCadena) {
        return JSON.parse(datosObtenidosEnCadena);
    }
    return [];
}

function guardarDatosEnAlmacenamientoLocal(claveDeEscritura, estructuraDatosGuardar) {
    localStorage.setItem(claveDeEscritura, JSON.stringify(estructuraDatosGuardar));
}

function crearNuevoEstudianteEnSistema(identificadorUnicoEstudiante, nombreCompletoEstudiante) {
    if (!identificadorUnicoEstudiante || !nombreCompletoEstudiante) {
        return false;
    }
    const listaActualEstudiantes = obtenerDatosDesdeAlmacenamientoLocal(claveAlmacenamientoLocalEstudiantes);
    const existeEstudiante = listaActualEstudiantes.some(estudiante => estudiante.id === identificadorUnicoEstudiante);
    if (existeEstudiante) {
        return false;
    }
    listaActualEstudiantes.push({ id: identificadorUnicoEstudiante, nombre: nombreCompletoEstudiante });
    guardarDatosEnAlmacenamientoLocal(claveAlmacenamientoLocalEstudiantes, listaActualEstudiantes);
    return true;
}

function crearNuevoCursoEnSistema(identificadorUnicoCurso, nombreDelCurso) {
    if (!identificadorUnicoCurso || !nombreDelCurso) {
        return false;
    }
    const listaActualCursos = obtenerDatosDesdeAlmacenamientoLocal(claveAlmacenamientoLocalCursos);
    const existeCurso = listaActualCursos.some(curso => curso.id === identificadorUnicoCurso);
    if (existeCurso) {
        return false;
    }
    listaActualCursos.push({ id: identificadorUnicoCurso, nombre: nombreDelCurso });
    guardarDatosEnAlmacenamientoLocal(claveAlmacenamientoLocalCursos, listaActualCursos);
    return true;
}

function registrarNuevaCalificacionEnSistema(identificadorEstudiante, identificadorCurso, valorNotaNumerica) {
    const notaConvertidaEnNumero = parseFloat(valorNotaNumerica);
    if (isNaN(notaConvertidaEnNumero) || notaConvertidaEnNumero < 0 || notaConvertidaEnNumero > 5) {
        return false;
    }
    const listaActualCalificaciones = obtenerDatosDesdeAlmacenamientoLocal(claveAlmacenamientoLocalCalificaciones);
    listaActualCalificaciones.push({
        idEstudiante: identificadorEstudiante,
        idCurso: identificadorCurso,
        nota: notaConvertidaEnNumero
    });
    guardarDatosEnAlmacenamientoLocal(claveAlmacenamientoLocalCalificaciones, listaActualCalificaciones);
    return true;
}

function calcularPromedioFinalNotasEstudiante(identificadorEstudiante) {
    const listaActualCalificaciones = obtenerDatosDesdeAlmacenamientoLocal(claveAlmacenamientoLocalCalificaciones);
    const notasDelEstudiante = listaActualCalificaciones.filter(calificacion => calificacion.idEstudiante === identificadorEstudiante);
    if (notasDelEstudiante.length === 0) {
        return 0;
    }
    const sumaTotalNotas = notasDelEstudiante.reduce((acumulado, calificacion) => acumulado + calificacion.nota, 0);
    return sumaTotalNotas / notasDelEstudiante.length;
}

function determinarEstadoAcademicoEstudiante(valorPromedioAcademico) {
    if (valorPromedioAcademico >= 3) {
        return "Aprobado";
    }
    return "Reprobado";
}

function ejecutarPruebasDeControlSistemaAutomático() {
    localStorage.clear();
    crearNuevoEstudianteEnSistema("E1", "Peppa");
    crearNuevoCursoEnSistema("C1", "Matematicas");
    registrarNuevaCalificacionEnSistema("E1", "C1", "4.5");
    const promedio = calcularPromedioFinalNotasEstudiante("E1");
    const estado = determinarEstadoAcademicoEstudiante(promedio);
    console.log("Promedio: " + promedio + " | Estado: " + estado);
}

ejecutarPruebasDeControlSistemaAutomático();