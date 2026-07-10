Decisiones y Pruebas

Arme una funcion para despachar encargos que trabaja de forma asincrona usando un temporizador para simular el viaje de los datos por el internet
Puse una doble condicion que exige que el producto este disponible en bodega y que el valor final sea mayor a cero para poder aprobar la operacion de forma segura
Use funciones de respuesta para avisar el exito o el fallo de cada caso separando los caminos del codigo segun el resultado obtenido
Incorpore medidores de tiempo en la consola para registrar de forma exacta cuantos segundos tarda cada proceso en responder desde que se hace el llamado


Casos de Prueba Revisados

Compra Valida: Funciona bien porque al pasar un encargo con existencias y precio positivo el sistema espera los tres segundos y activa la respuesta de exito
Producto Agotado: Funciona bien porque si la disponibilidad esta en falso la condicion frena la aprobacion y salta de una vez la respuesta con el mensaje de error
Precio Invalido: Funciona bien porque al meter un valor por debajo de cero la revision detecta la anomalia y despacha el caso directo por el camino de falla
Cronometro de Consola: Funciona bien porque mide el retraso del temporizador mostrando en la pantalla el tiempo total que demoro la operacion asincrona