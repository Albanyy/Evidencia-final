Actualizacion Inmutable evitamos por completo el uso de metodos destructivos como "push" o asignaciones directas por punto en su lugar copiamos las propiedades nivel por nivel usando el operador de propagacion

Reutilizacion de Referencias cuando una seccion del estado no sufre modificaciones como el objeto "usuario" su referencia en memoria se hereda intacta hacia el nuevo objeto esto optimiza el uso de la memoria del sistema

Uso del Reducer creamos una funcion centralizada de procesamiento que recibe un estado y un objeto de accion con cadenas constantes permitiendo escalar el manejo del estado de la interfaz de forma predecible

estadoInicial === estadoVersionUno cada operacion produce un objeto raiz completamente nuevo el estado original de Peppa no fue mutado

estadoInicial.usuario === estadoVersionUno.usuario las referencias compartidas que no necesitaban cambios siguen siendo coherentes, apuntando al mismo espacio de memoria original

estadoInicial.preferenciasInterfaz === estadoVersionUno.preferenciasInterfaz al alterarse el tema se creo un sub objeto nuevo rompiendo con la version vieja de forma controlada