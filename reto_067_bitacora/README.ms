Consumo Eficiente de Memoria la clase "Rango" para que cumpla con el protocolo de iteracion sin fabricar arreglos intermedios los valores numericos se calculan dinamicamente bajo demanda en cada vuelta del ciclo

Control de Direccionalidad el metodo "next" evalua el signo del paso si el paso es positivo el ciclo frena cuando la variable supera el limite superior si es negativo se detiene cuando cae por debajo del limite inferior

Evaluacion del Paso Cero añadimos un bloqueo directo en el constructor para impedir bucles infinitos accidentales  lanzando una excepcion controlada si el incremento provisto equivale a cero

Metodo Take una envoltura que consume un iterador existente y encapsula un contador interno frena la entrega de datos en cuanto alcanza lo definido por el usuario sin importar que el rango original contenga mas elementos disponibles