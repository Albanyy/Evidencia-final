Decisiones y Pruebas
Guarde los tres botones de control y las etiquetas del reloj en variables para poder manejar los tiempos del temporizador Pomodoro directamente desde el código.

Use una función especial para convertir los segundos sueltos en un formato limpio de minutos y segundos con dos dígitos, agregando ceros a la izquierda cuando sea necesario.

Puse un temporizador de intervalo que descuenta un segundo a la vez y frena el reloj de golpe cuando el marcador llega a cero para cambiar automáticamente entre los veinticinco minutos de trabajo y los cinco minutos de descanso.

Configure un freno de seguridad en el botón de inicio para que, si el reloj ya está corriendo, el sistema ignore los nuevos clicks y no acelere el contador de forma descontrolada.

Casos de Prueba Revisados
Formato del Reloj: Funciona bien porque al arrancar el programa toma los segundos iniciales y los transforma para pintar un limpio "25:00" en la pantalla.

Control de Pausa: Funciona bien porque al hundir el botón de pausar el sistema borra el intervalo activo, dejando congelado el tiempo restante sin reiniciar la cuenta.

Cambio de Fase: Funciona bien porque cuando el tiempo de trabajo llega a cero, la computadora detiene la alarma, cambia la etiqueta a "Descanso" y le clava los cinco minutos reglamentarios de una vez.

Reinicio Completo: Funciona bien porque al tocar el botón de reiniciar borra cualquier temporizador que esté corriendo, regresa el estado a la fase de trabajo y acomoda el reloj en su valor inicial.