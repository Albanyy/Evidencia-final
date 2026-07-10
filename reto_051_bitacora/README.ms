Decisiones y Pruebas

Guarde las etiquetas del contenedor de resultados y del formulario en variables para manipular los elementos de la pagina web directamente con javascript
Use una funcion asincrona con el comando fetch para conectarse con un servicio de internet externo y traer datos en tiempo real de forma automatica
Puse un freno de seguridad para evitar que la pagina web se recargue sola al presionar el boton de busqueda
Arme una estructura para crear etiquetas de imagen y texto incrustando de una vez la ruta del archivo que responde el servidor de internet
Configure un capturador de fallos que atrapa las respuestas incorrectas de la red para mostrar un texto de advertencia pintado de color rojo


Casos de Prueba Revisados

Busqueda Exitosa: Funciona bien porque al meter una raza existente el sistema borra el texto de espera crea la etiqueta de imagen y muestra la foto del perro con el tamaño asignado
Raza Inexistente: Funciona bien porque si el usuario escribe un nombre que no esta en la base de datos el sistema detecta el codigo de error y pinta el mensaje en color rojo
Espera de Carga: Funciona bien porque mientras la computadora espera la respuesta del servidor se muestra un aviso flotante indicando que esta buscando al animal