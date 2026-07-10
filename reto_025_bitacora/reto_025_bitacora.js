let libro ={
    id: 1,
    titulo: "Titulo1",
    autor: "Autor1",
    disponible: true,
    prestamos: 0,

    prestar: function(){
        if(this.disponible){
            this.disponible=false;
            console.log("Prestado exitosamente");
            this.prestamos +=1;
            return;
        }else{
            console.log("El libro no esta disponible")
        }
    },

    devolver: function(){
        if(!this.disponible){
            this.disponible= true;
            console.log("Delvolvido exitosamente")
            return;
        }else{
            console.log("No puedes devolver algo que no se presto")
        }
    },

    obtenerResumen: function(){
        console.log("----------");
        console.log("Id: ",this.id);
        console.log("Titulo: ",this.titulo);
        console.log("Autor: ",this.autor)
        console.log(`Disponible: ${this.disponible  ? "Disponible" : "No esta disponible"}`)
        console.log("Prestamos: ",this.prestamos);
        console.log("----------");
    }

};

const nuevoAtributo = "Idioma";
libro[nuevoAtributo]= "Idioma1";
libro.obtenerResumen();
libro.prestar();
libro.prestar();
libro.devolver();
libro.obtenerResumen();
console.table(libro);