




// Agarrar las guitarras desde el local Storage

function cargarGuitarrasDesdeLocalStorage() {
  const guitarrasLocalStorage = JSON.parse(localStorage.getItem('guitarrasSeleccionadas')) || [];

  return guitarrasLocalStorage;
}


const btnMostrarGuitarras = document.getElementById('carrito-btn');
btnMostrarGuitarras.addEventListener('click', () => {
  const guitarrasGuardadas = cargarGuitarrasDesdeLocalStorage();
  mostrarGuitarrasEnDOM(guitarrasGuardadas);
});



// Mostrar las guitarras en el DOM


function mostrarGuitarrasEnDOM(guitarras) {
  const contenedorGuitarras = document.getElementById('guitarras-container');
  contenedorGuitarras.innerHTML = ''; 

  guitarras.forEach(guitarra => {
      const divGuitarra = document.createElement('div');
      divGuitarra.innerHTML = `
          <p> Marca: ${guitarra.marca} </p>
          <p> Modelo: ${guitarra.modelo} </p>
          <p> Año: ${guitarra.año} </p>
          <p> Precio: $${guitarra.precio} </p>
          
          
          <hr>
      `;
      contenedorGuitarras.appendChild(divGuitarra);
  });
}




// Vaciar carrito 

const btnEliminarLocalStorage = document.getElementById('vaciar-carrito');


btnEliminarLocalStorage.addEventListener('click', () => {
   
    localStorage.removeItem('guitarrasSeleccionadas');
    console.log('Elemento eliminado del Local Storage.');

    window.location.reload();
});


