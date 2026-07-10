const usuarioBase = {
    describir: function() {
        return `Usuario con rol: ${this.rol}`;
    }
};

const usuarioPeppa = Object.create(usuarioBase);
usuarioPeppa.rol = "Administrador";
usuarioPeppa.nombreCompleto = "Peppa Pig";

const usuarioInvitado = Object.create(usuarioBase);
usuarioInvitado.rol = "Invitado";

usuarioInvitado.describir = function() {
    return `Acceso restringido para el usuario de tipo: ${this.rol}`;
};

console.log(usuarioPeppa.describir());
console.log(usuarioInvitado.describir());

console.log("¿nombreCompleto es propia de usuarioPeppa?:", Object.hasOwn(usuarioPeppa, "nombreCompleto"));
console.log("¿describir es propia de usuarioPeppa?:", Object.hasOwn(usuarioPeppa, "describir"));
console.log("¿describir existe en usuarioPeppa (in)?:", "describir" in usuarioPeppa);

console.log(Object.getPrototypeOf(usuarioPeppa) === usuarioBase);
console.log(Object.getPrototypeOf(usuarioBase) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

function ConstructorUsuario(rolAsignado, nombreAsignado) {
    this.rol = rolAsignado;
    this.nombreCompleto = nombreAsignado;
}
ConstructorUsuario.prototype.describir = function() {
    return `Usuario construido con rol: ${this.rol}`;
};

const usuarioConstruido = new ConstructorUsuario("Editor", "Carlos");
console.log(usuarioConstruido.describir());