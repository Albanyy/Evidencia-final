
function consultarEstudiante(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 123) {
                resolve({ id: 123, nombre: "peppa" });
            } else {
                reject("Estudiante no encontrado");
            }
        }, 1000);
    });
}

function validarDeuda(estudiante){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            if(estudiante.id===123 || estudiante.id===456){
                resolve("No tiene deudas")
            }else{
                reject("Tiene deudad")
            }
        },1000)
    }
    )
}

function registrarAsignaturas(estudiante){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve(["cocina","lectura","jardineria","matematicas"])
        },1000)
    }
    )
}

async function matricularEstudiante(id) {
    try {

        const estudiante = await consultarEstudiante(id); 
        await validarDeuda(estudiante);
        const asignaturas = await registrarAsignaturas(estudiante);

        const estudianteCompleto = {
            estudiante: estudiante.nombre,
            asignaturas: asignaturas
        };

        console.log("Todo salio bien", estudianteCompleto);
        return estudianteCompleto;

    } catch (error) {
        console.log("salio mal algo: ", error);

    } finally {
        console.log("termino");
    }
}


function tiempo(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Se acabo el tiempo"), ms);
    });
}

matricularEstudiante(999);
matricularEstudiante(456);

Promise.race([
    matricularEstudiante(123),
    tiempo(4000) 
])
.then(resultado => console.log("Exitoso", resultado))
.catch(error => console.log("Fallo:", error));