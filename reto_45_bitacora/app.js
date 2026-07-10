import { sumar } from "./operaciones.js";
import { restar } from "./operaciones.js";
import { multiplicar } from "./operaciones.js";
import { dividir } from "./operaciones.js";
import { esDivisionValida } from "./validaciones.js";
import formatearResultado from "./formato.js";

const pantalla = document.querySelector("#pantalla");
let a=5,b=4;
let resultadoNumero;
resultadoNumero = multiplicar(a, b);
if(esDivisionValida(b)){
    resultadoNumero=dividir(a,b);
}else {
    resultadoNumero="No se puede dividir por 0";
}
let texto= formatearResultado(resultadoNumero);
pantalla.textContent=texto;