const expresionRegularCorreoBasico = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const expresionRegularCodigoCorporativo = /^[A-Z]{3}-2026-[0-9]{3}$/;
const expresionRegularTelefonoNacional = /^[0-9]{10}$/;

function evaluarEstructuraCorreoElectronico(cadenaCorreo) {
    if (!cadenaCorreo) {
        return { esValido: false, mensajeRechazo: "La entrada de correo electronico se encuentra vacia" };
    }
    const cumplePatron = expresionRegularCorreoBasico.test(cadenaCorreo);
    return {
        esValido: cumplePatron,
        mensajeRechazo: cumplePatron ? "" : "El correo debe incluir una estructura con arroba dominio y una extension de dos o mas letras"
    };
}

function evaluarEstructuraCodigoInterno(cadenaCodigo) {
    if (!cadenaCodigo) {
        return { esValido: false, mensajeRechazo: "La entrada de codigo corporativo se encuentra vacia" };
    }
    const cumplePatron = expresionRegularCodigoCorporativo.test(cadenaCodigo);
    return {
        esValido: cumplePatron,
        mensajeRechazo: cumplePatron ? "" : "El formato del codigo exige tres letras mayusculas el año 2026 y tres valores numericos separados por guiones"
    };
}

function evaluarEstructuraTelefonoCelular(cadenaTelefono) {
    if (!cadenaTelefono) {
        return { esValido: false, mensajeRechazo: "La entrada de numero telefonico se encuentra vacia" };
    }
    const cumplePatron = expresionRegularTelefonoNacional.test(cadenaTelefono);
    return {
        esValido: cumplePatron,
        mensajeRechazo: cumplePatron ? "" : "El numero telefonico debe constar exactamente de diez digitos de manera consecutiva sin espacios"
    };
}

const bancoDePruebasFormatos = [
    { tipoFormato: "correo", cadenaEvaluar: "peppa.pig@correo.com", resultadoEsperado: true },
    { tipoFormato: "correo", cadenaEvaluar: "peppa.pig@dominio", resultadoEsperado: false },
    { tipoFormato: "correo", cadenaEvaluar: "peppa.pig@empresa.com.co", resultadoEsperado: true },
    { tipoFormato: "correo", cadenaEvaluar: "@sinusuario.com", resultadoEsperado: false },
    { tipoFormato: "correo", cadenaEvaluar: "peppa.pig", resultadoEsperado: false },
    { tipoFormato: "correo", cadenaEvaluar: "peppa.pig_123@servidor.net", resultadoEsperado: true },

    { tipoFormato: "codigo", cadenaEvaluar: "PEA-2026-001", resultadoEsperado: true },
    { tipoFormato: "codigo", cadenaEvaluar: "pea-2026-001", resultadoEsperado: false },
    { tipoFormato: "codigo", cadenaEvaluar: "PEPP-2026-001", resultadoEsperado: false },
    { tipoFormato: "codigo", cadenaEvaluar: "PEA-2025-001", resultadoEsperado: false },
    { tipoFormato: "codigo", cadenaEvaluar: "PEA-2026-01", resultadoEsperado: false },
    { tipoFormato: "codigo", cadenaEvaluar: "XYZ-2026-789", resultadoEsperado: true },

    { tipoFormato: "telefono", cadenaEvaluar: "3151234567", resultadoEsperado: true },
    { tipoFormato: "telefono", cadenaEvaluar: "1234567", resultadoEsperado: false },
    { tipoFormato: "telefono", cadenaEvaluar: "31512345678", resultadoEsperado: false },
    { tipoFormato: "telefono", cadenaEvaluar: "315abc4567", resultadoEsperado: false },
    { tipoFormato: "telefono", cadenaEvaluar: "3000000000", resultadoEsperado: true },
    { tipoFormato: "telefono", cadenaEvaluar: "+5731512345", resultadoEsperado: false }
];

let acumuladorPruebasExitosas = 0;

bancoDePruebasFormatos.forEach(casoIndividual => {
    let respuestaValidacion;
    if (casoIndividual.tipoFormato === "correo") {
        respuestaValidacion = evaluarEstructuraCorreoElectronico(casoIndividual.cadenaEvaluar);
    } else if (casoIndividual.tipoFormato === "codigo") {
        respuestaValidacion = evaluarEstructuraCodigoInterno(casoIndividual.cadenaEvaluar);
    } else if (casoIndividual.tipoFormato === "telefono") {
        respuestaValidacion = evaluarEstructuraTelefonoCelular(casoIndividual.cadenaEvaluar);
    }

    if (respuestaValidacion.esValido === casoIndividual.resultadoEsperado) {
        acumuladorPruebasExitosas = acumuladorPruebasExitosas + 1;
    }
    console.log(`Formato: ${casoIndividual.tipoFormato} | Valor: "${casoIndividual.cadenaEvaluar}" | Valido: ${respuestaValidacion.esValido} | Esperado: ${casoIndividual.resultadoEsperado}`);
});

console.log(`\nCantidad total de evaluaciones correctas: ${acumuladorPruebasExitosas} de ${bancoDePruebasFormatos.length}`);

function producirCodigoAleatorioValido() {
    const caracteresLetras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tresLetrasGarantizadas = "";
    for (let iteracion = 0; iteracion < 3; iteracion++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresLetras.length);
        tresLetrasGarantizadas = tresLetrasGarantizadas + caracteresLetras.charAt(indiceAleatorio);
    }
    let tresDigitosGarantizados = "";
    for (let iteracion = 0; iteracion < 3; iteracion++) {
        tresDigitosGarantizados = tresDigitosGarantizados + Math.floor(Math.random() * 10);
    }
    return `${tresLetrasGarantizadas}-2026-${tresDigitosGarantizados}`;
}

const nuevoCodigoDinamico = producirCodigoAleatorioValido();
console.log(`Valor generado: ${nuevoCodigoDinamico}`);
console.log(`Resultado final de la validacion automatica: ${evaluarEstructuraCodigoInterno(nuevoCodigoDinamico).esValido}`);