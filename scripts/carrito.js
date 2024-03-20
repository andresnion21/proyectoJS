




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
  let precioTotal = 0; 

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
      precioTotal += guitarra.precio; 
  });

  // Suma de los precios

  const total = document.createElement('p');
  total.textContent = `Total: $${precioTotal}`;
  contenedorGuitarras.appendChild(total);
}




// Vaciar carrito 

const btnEliminarLocalStorage = document.getElementById('vaciar-carrito');


btnEliminarLocalStorage.addEventListener('click', () => {
   
    localStorage.removeItem('guitarrasSeleccionadas');
    console.log('Elemento eliminado del Local Storage.');

    window.location.reload();
});



document.addEventListener('DOMContentLoaded', function () {
  const finalizarCompraButton = document.getElementById('finalizar');

  finalizarCompraButton.addEventListener('click', function() {
    if (carritoNoVacio()) {
      Swal.fire({
        title: 'Gracias por su compra!',
        text: 'Esperamos que disfrute su nueva guitarra!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Su carrito está vacío! Agregue productos antes de finalizar la compra.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  });
});


function carritoNoVacio() {
  const guitarrasGuardadas = cargarGuitarrasDesdeLocalStorage();
  return guitarrasGuardadas.length > 0;
}
