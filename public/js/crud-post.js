export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async (id) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    const response = await fetch('/publicacion/:id', {  //agregue /:id
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
    /*const response = await fetch('/publicacion/:id');
    const publicacionid = await responde.json();
    return publicacionid*/
  
}

export const eliminarPublicacion = async (id) => {
    const response = await fetch('/publicion/:id', {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
  
}

// FUNCIONES PARA MOSTRAR DATOS en el navegador
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded"  width="200">
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p>${pub.detalle}</p>
                    <p>${pub.fecha_publicacion}</p>
                    <p>Creador por: ${pub.autor}</p>
                </div>
            </section>
            
        `
    });

    elemento.innerHTML = registros
}
