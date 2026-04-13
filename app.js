// 1. Seleccionamos el lugar donde queremos poner los enlaces
const contenedorEnlaces = document.getElementById('lista-enlaces');

// 2. Recorremos nuestra lista de enlaces con un bucle (forEach)
misEnlaces.forEach(enlace => {
    
    // 3. Creamos un elemento <a> (etiqueta de enlace)
    const boton = document.createElement('a');
    
    // 4. Le damos contenido y atributos
    boton.classList.add('enlace-estilo'); // Le ponemos una clase para el CSS
    boton.href = enlace.url;
    boton.target = "_blank"; // Para que se abra en otra pestaña
    boton.innerHTML = `${enlace.icono} ${enlace.nombre}`;
    
    // 5. Metemos el botón dentro del contenedor de la página
    contenedorEnlaces.appendChild(boton);
});