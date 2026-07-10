const formulario = document.getElementById('formulario');
const resultados = document.getElementById('resultados');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const raza = document.getElementById('buscar').value.toLowerCase().trim();
    const url = `https://dog.ceo/api/breed/${raza}/images/random`;

    try {
        resultados.innerHTML = "<p>Buscando perro</p>";

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: No se encontró ese animal`);
        }

        const datos = await respuesta.json();

        resultados.textContent = ""; 
        
        const titulo = document.createElement('h3');
        titulo.textContent = `Animal: Perro (Raza: ${raza.toUpperCase()})`;
        
        const imagen = document.createElement('img');
        imagen.src = datos.message;
        imagen.alt = raza;
        imagen.style.width = "300px";

        resultados.appendChild(titulo);
        resultados.appendChild(imagen);

    } catch (error) {
        resultados.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});