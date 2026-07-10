
Decisiones y Pruebas
Use los simbolos "^" al inicio y "$" al final de cada patron esto asegura que el texto revisado coincida exactamente de principio a fin evitando que se acepten trampas o textos con partes ocultas

Las funciones devuelven una respuesta clara que avisa si el formato es correcto o no si hay un error se entrega un texto sencillo explicando qué falta corregir

Cree un sistema que inventa codigos al azar siguiendo las reglas del ejercicio sirve para revisar que el programa funcione bien con datos nuevos

Casos de Prueba Revisados

Correo Electronico Valido `peppa.pig@correo.com` funciona porque tiene usuario el simbolo arroba, un dominio y una extensión válida.
Correo Electrónico Con Error `peppa.pig@dominio` falla porque no tiene una extension al final como .com o .net

codigo de la Empresa Valido `PEA-2026-001` funciona porque tiene tres letras mayusculas el año 2026 y tres numeros separados por guiones

codigo de la Empresa Con Error `PEA-2025-001` falla porque el año no es el 2026

Telefono Celular Valido: `3151234567` funciona porque son exactamente diez numeros seguidos sin espacios
Telefono Celular Con Error: `315abc4567` falla porque incluye letras dentro del numero de telefono

Lo que no puede hacer 
Correos solo revisa correos comunes de internet no acepta formatos muy raros 
Codigos obliga a que el año sea siempre 2026 si el año cambia en el futuro el programa dejara de funciona
Telefonos: solo deja escribir los diez numeros seguidos si pones el codigo del pais o dejas espacios va a fallar