1. Fin
2. Primera promesa
3. Funcion queueMicrotask 
4. Promesa con await dentro de la funcion asincrona
5. Segunda promesa
6. Primer temporizador en la cola de macrotareas
7. Segundo temporizador en la cola de macrotareas

Resultado Real de la Consola
1. Fin
2. Primera promesa
3. Funcion queueMicrotask 
4. Promesa con await dentro de la funcion asincrona
5. Segunda promesa
6. Primer temporizador en la cola de macrotareas
7. Segundo temporizador en la cola de macrotareas

Explicación de la Línea Temporal
Pila de Ejecucion sincrona javaScript recorre el archivo de arriba a abajo al encontrar codigo asincrono los temporizadores y las promesas los delega a las colas de espera y continua lo unico sincrono e inmediato es el mensaje "Fin" por lo que sale impreso de primeras

Cola de Microtareas cuando la pila principal se vacia por completo JavaScript procesa la cola de microtareas en estricto orden de llegada aqui se ejecutan la "Primera promesa" "Funcion queueMicrotask" y el "await" de la función asincrona la "Segunda promesa" se procesa justo despues porque estaba encadenada esperando a la primera

Cola de Macrotareas por ultimo cuando ya no queda absolutamente ninguna microtarea pendiente en el sistema JavaScript ejecuta las macrotareas por esta razon los dos temporizadores salen al final de todo a pesar de tener configurados cero milisegundos de espera

