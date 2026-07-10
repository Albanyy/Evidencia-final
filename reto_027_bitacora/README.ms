Decisiones y Pruebas
Cree un objeto de respuesta con informacion en bloques de usuario contacto ubicacion roles y metadatos

Use desestructuracion para extraer el nombre y renombrar el identificador como usuarioId 

Entre de forma anidada a la ubicacion para sacar la ciudad y aplique un valor por defecto de cero para el telefono faltante

Separe los metadatos y con tres puntos para aislar la informacion del resto de los datos originales

Construi un objeto final llamado interfaz garantizando que el objeto inicial se mantenga intacto sin mutaciones

Casos de Prueba Revisados

Renombre y extraccion funciona bien porque las variables contienen los textos del objeto de origen y el identificador cambio su nombre correctamente

Valor por defecto funciona bien porque al no existir la propiedad del telefono en el contacto el sistema le asigna cero

Operador rest funciona bien porque separa los metadatos en su propia constante y agrupa el resto de propiedades en un objeto limpio listo para la interfaz