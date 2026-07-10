Decisiones y Pruebas
Guarde las etiquetas de los campos del formulario y los textos de alerta en variables para poder revisar los datos introducidos por el usuario y controlar la pantalla

Use un escuchador de envíos con un freno de seguridad para evitar que la página se recargue sola al presionar el botón de registrarse

Puse una serie de condiciones para limpiar los textos de alerta viejos en cada intento y validar que el nombre no esté vacío, el correo tenga su formato, la edad pase los dieciocho años y los términos estén aceptados

Configure una orden de enfoque automático para que, si hay datos equivocados o vacíos, la computadora mueva el cursor directo al primer campo que falló en la lista

Casos de Prueba Revisados

Envío en Blanco funciona bien porque al intentar mandar el formulario vacío frena el proceso, clava los mensajes de error en cada casilla y salta el cursor directo al espacio del nombre

Filtro de Edad funciona bien porque si un menor de edad o un texto se introduce en la casilla de los años, el sistema activa la alerta de que debes ser mayor de edad

Registro Exitoso funciona bien porque al llenar todos los espacios con los datos correctos borra cualquier advertencia vieja y escribe el aviso de proceso completado en la pantalla