let Celcius= 25;
let kilometros = 80;
let pesos = 4000;
let tasaCambio;

function celsiusAFahrenheit(Celcius){
    let Fahrenheit = (Celcius * 9 / 5) + 32;
    return Fahrenheit;
}

function kilometrosAMillas(kilometros){
    let milla= kilometros * 0.621371;
    return milla;
}

function pesosADolares(pesos,tasaCambio=4000){
    let dolar= pesos / tasaCambio;
    return dolar;
}

function formatearResultado(valor,unidad){
    return `${valor.toFixed(2)} ${unidad}`;
}

console.log(formatearResultado(celsiusAFahrenheit(Celcius), "°F"));
console.log(formatearResultado(celsiusAFahrenheit(0), "°F"));
console.log(formatearResultado(kilometrosAMillas(kilometros), "Millas"));
console.log(formatearResultado(kilometrosAMillas(10), "Millas"));
console.log(formatearResultado(pesosADolares(pesos, 4200), "USD"));
console.log(formatearResultado(pesosADolares(pesos), "USD"));