Decisiones y Pruebas
Separe el programa en tareas muy claras donde unas funciones se encargan unicamente de guardar y traer los datos del navegador mientras que otras revisan que las notas estén bien escritas y hacen los calculos matematicos

Evite revolver los codigos que calculan cosas con los codigos que manejan las pantallas o el almacenamiento asi es mucho mas facil encontrar un fallo si algo deja de funcionar

Cree un sistema de simulacion automatica al iniciar el programa que escribe datos directamente de prueba y revisa en la consola si el promedio final se calcula correctamente sin errores


Casos de Prueba Revisados

Estudiante Nuevo `E1` funciona porque el identificador no se repite en la memoria y se guarda correctamente

Estudiante Repetido `E1` falla porque el sistema detecta que ya existe esa identificacion evitando datos duplicados

Guardar una Nota Correcta `4.5` funciona porque es un numero que esta dentro del rango permitido de cero a cinco

Guardar una Nota Con Error `6.0` falla porque el sistema frena cualquier numero que este por fuera del rango o que sea texto

Calculo de Promedio con notas 4.0 y 5.0 funciona porque el programa hace la operacion y da como resultado final un 4.5

Estado de Aprobacion con promedio alto funciona porque si la nota final es 3 o mas el estado cambia automaticamente a aprobado de lo contrario pasa a reprobado


Lo que no puede hacer 
Almacenamiento local solo funciona si el navegador tiene espacio y no esta en incognito estricto de lo contrario los datos de los cursos y notas se borraran al cerrar la pagina

Notas fijas obliga a que la escala sea siempre de cero a cinco si la institucion cambia su forma de calificar el programa dejara de funcionar

Control de texto solo revisa que los campos no se queden vacios pero no detecta si un usuario escribe numeros o simbolos raros dentro del nombre de un estudiante