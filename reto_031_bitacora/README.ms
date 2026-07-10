Decisiones y Pruebas
Arme una funcion para sacar plata de una cuenta y configure dos contadores para llevar el registro de los intentos que salieron bien o mal

Puse varios filtros con alertas para frenar el proceso de golpe si meten texto en vez de numeros montos menores a cero o si piden mas plata de la que hay guardada

Use una estructura de atrapar errores para capturar los fallos especificos sin que se dañe el programa y asegure que siempre muestre un aviso al terminar la operacion

Casos de Prueba Revisados

Validacion de Texto funciona bien porque al intentar retirar una frase en palabras el sistema frena de inmediato y salta la alerta de que no es un numero

Control de Negativos funciona bien porque al meter un monto por debajo de cero detecta el fallo y avisa en la pantalla que el valor no es positivo

Revision de Fondos funciona bien porque si pides mas plata de la que tiene el saldo salta la advertencia de fondos insuficientes y se suma a la lista de fallos

Retiro Exitoso funciona bien porque al pasar los datos correctos descuenta la plata de forma automatica y actualiza los contadores finales con los exitos logrados