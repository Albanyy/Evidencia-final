const respuesta={
    usuario:{
        id:"id1",
        nombre: "nombre1"
    },

    contacto:{
        correo:"nombre1@gmail.com",
    },

    ubicacion: {
        ciudad:"ciudad1",
    },

    roles:["admin","usuario"],
    metadatos:{
        fecha: "15/05/1600"
    },
}

const {nombre,id: usuarioId}= respuesta.usuario;
const {ubicacion:{ciudad}}= respuesta;
const {correo,telefono=0}=respuesta.contacto

const {metadatos, ...datosRestantes} = respuesta;
console.log(metadatos);
console.log(datosRestantes);

const interfaz={
    nombre: nombre,
    id: usuarioId,
    ubicacion: ciudad,
    correo: correo
}
console.log(metadatos);
console.log(datosRestantes);
console.table(interfaz);





















/*let respuesta = {
    usuario: { id: 1, nombre: "Ana" },
    contacto: { correo: "ana@mail.com" }, 
    ubicacion: { ciudad: "Cali" },
    roles: ["admin"],
    metadatos: { ip: "192.168.1.1" }
};

let { usuario: { nombre, id: usuarioId }, contacto: { correo, telefono = "000" }, ubicacion: { ciudad }, metadatos, ...resto } = respuesta;

let interfaz = { usuarioId, nombre, correo, telefono, ciudad, resto };
console.log(interfaz);*/