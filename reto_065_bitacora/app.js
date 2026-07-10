function procesarTextoYFrecuencias(textoEntrada) {
    if (!textoEntrada || typeof textoEntrada !== "string") {
        console.log("El texto no es valido");
        return;
    }

    const textoNormalizado = textoEntrada
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");

    const listaPalabras = textoNormalizado.split(/\s+/).filter(palabra => palabra.length > 0);

    const mapaFrecuencias = new Map();

    listaPalabras.forEach(palabra => {
        const cantidadActual = mapaFrecuencias.get(palabra) || 0;
        mapaFrecuencias.set(palabra, cantidadActual + 1);
    });

    const arregloOrdenado = [...mapaFrecuencias.entries()].sort((elementoA, elementoB) => elementoB[1] - elementoA[1]);

    const lasDiezMasFrecuentes = arregloOrdenado.slice(0, 10);
    lasDiezMasFrecuentes.forEach(([palabra, frecuencia], indice) => {
        console.log(`${indice + 1}. Palabra: "${palabra}" - Repeticiones: ${frecuencia}`);
    });

    const palabraBuscar = "peppa";
    if (mapaFrecuencias.has(palabraBuscar)) {
        console.log(`La palabra "${palabraBuscar}" existe y aparece: ${mapaFrecuencias.get(palabraBuscar)} veces`);
    } else {
        console.log(`La palabra "${palabraBuscar}" no se encuentra en el texto`);
    }

    const mapaLongitudes = new Map();
    listaPalabras.forEach(palabra => {
        const longitud = palabra.length;
        if (!mapaLongitudes.has(longitud)) {
            mapaLongitudes.set(longitud, []);
        }
        if (!mapaLongitudes.get(longitud).includes(palabra)) {
            mapaLongitudes.get(longitud).push(palabra);
        }
    });

    for (const [longitud, palabras] of mapaLongitudes.entries()) {
        console.log(`Palabras con longitud de ${longitud} letras:`, palabras);
    }
}

const textoDePruebaEjecucion = "Hola soy peppa lalalalalalalalalalalalala peppa peppa peppa";
procesarTextoYFrecuencias(textoDePruebaEjecucion);