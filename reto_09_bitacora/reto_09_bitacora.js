let nota = 75;
let asistencia = 85;
let entregas = 4;
let estado = "";
let recomendacion = "";

if (nota < 0 || nota > 100 || asistencia < 0 || asistencia > 100 || entregas < 0 || entregas > 5) {
    console.log("Datos inválidos");
} else if (nota >= 90 && asistencia >= 80 && entregas === 5) {
    estado = "Excelente";
    recomendacion = "¡Espectacular! Sigue así.";
} else if (nota >= 70 && asistencia >= 80 && entregas >= 4) {
    estado = "Aprobado";
    recomendacion = "Buen trabajo, aprobaste.";
} else if (nota >= 50 && asistencia >= 70 && entregas >= 2) {
    estado = "Recuperación";
    recomendacion = "Debes presentar taller de refuerzo.";
} else {
    estado = "Reprobado";
    recomendacion = "No cumpliste los mínimos.";
}


if (estado !== "") {
    console.log(`Estado: ${estado} y Recomendación: ${recomendacion}`);
}