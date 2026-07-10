Estado Encapsulado puro al utilizar variables declaradas con "let" dentro del ambito de la funcion externa el valor numerico del contador es 100% inaccesible desde el entorno global la unica forma de leerlo o alterarlo es a traves de las funciones del objeto retornado

Mantenimiento del ambito cada vez que se invoca "crearContador" el motor de JavaScript crea un entorno de memoria totalmente nuevo y aislado esto asegura que las operaciones en el contador de Peppa no afecten de ninguna manera al contador de prueba secundario

Sistema de Suscriptores se implemento un arreglo interno para almacenar funciones de devolucion de llamada cada vez que el estado interno cambia por un incremento disminucion o reinicio se barren los suscriptores y se les notifica el nuevo valor inmediatamente