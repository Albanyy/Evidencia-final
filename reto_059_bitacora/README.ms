Decisiones de Diseño y Pruebas
Herencia con Object.create creamos un objeto base puro sin usar clases los objetos secundarios heredan el metodo "describir" automaticamente a traves de la cadena oculta de prototipos

Diferencia entre Object.hasOwn y Operador In al evaluar las propiedades comprobamos que "Object.hasOwn" devuelve falso para los metodos heredados ya que no pertenecen directamente al objeto hijo en cambio el operador "in" devuelve verdadero porque busca a lo largo de toda la cadena de herencia

Sobrescritura aislada modificamos el comportamiento de "describir" unicamente en el objeto invitado demostrando que los cambios especificos no rompen ni alteran el objeto base original ni a otros elementos hermanos

