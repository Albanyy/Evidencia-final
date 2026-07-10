Usamos el operador `#` de javaScript para asegurar que las variables como el saldo o el historial no se puedan alterar por fuera de la como por ejemplo hackeos o malas asignaciones directas

Al retornar el historial usamos el [...this.#historialMovimientos]` para mandar una copia exacta asi si alguien intenta modificar el array por fuera el historial real de la cuenta se queda intacto

Los depositos y retiros revisan estrictamente que los montos sean mayores a cero y que existan fondos suficientes antes de hacer cualquier operación matemática

Añadimos una funcion global a la clase para transferir dinero de una cuenta a otra reutilizando la logica interna de retiro y depósito de forma segura