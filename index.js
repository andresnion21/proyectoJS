

class guitarra{
    constructor(marca, modelo, año , precio, cantidad, stock){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.cantidad = cantidad
        this.stock = stock
    }

    precioConIva (){
       return("El precio con iva es: $" + (this.precio * 1.21));
    }

    siHayStock(){
        return( this.cantidad > 0 );
    }

    descontarUnidad(unidad){
        if(this.cantidad > unidad)
            this.cantidad = this.cantidad - unidad; 
    }
}

const guitarra1 = new guitarra("Ibanez", "RG", 2015, 1200, 2, true)
const guitarra2 = new guitarra("Fender", "Stratocaster", 1989, 1500, 1, true)
const guitarra3 = new guitarra("Gibson", "Les Paul", 1973, 2500, 1, true)
const guitarra4 = new guitarra("Musicman", "Majesty", 2020, 2000, 2, true)
const guitarra5 = new guitarra("PRS" , "SE", 2024 ,1500,  3, true)
const guitarra6 = new guitarra( "Fender", "Telecaster", 1986, 2800, 1, true)


const guitarras = [guitarra1, guitarra2, guitarra3, guitarra4]

document.getElementById('gtr1').addEventListener('click', () => {  mostrarInfoGuitarra(guitarra1); agregarGuitarraSeleccionada(guitarra1);
    Toastify({
        text: "Agregaste Ibanez RG al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});
document.getElementById('gtr2').addEventListener('click', () => { mostrarInfoGuitarra(guitarra2); agregarGuitarraSeleccionada(guitarra2);
    Toastify({
        text: "Agregaste Fender Stratocaster al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});
document.getElementById('gtr3').addEventListener('click', () =>{ mostrarInfoGuitarra(guitarra3); agregarGuitarraSeleccionada(guitarra3);
    Toastify({
        text: "Agregaste Gibson Les Paul al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});
document.getElementById('gtr4').addEventListener('click', () => {  mostrarInfoGuitarra(guitarra4); agregarGuitarraSeleccionada(guitarra4);
    Toastify({
        text: "Agregaste Music Man Majesty al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});
document.getElementById('gtr5').addEventListener('click', () => { mostrarInfoGuitarra(guitarra5); agregarGuitarraSeleccionada(guitarra5);
    Toastify({
        text: "Agregaste PRS SE al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});
document.getElementById('gtr6').addEventListener('click', () =>{ mostrarInfoGuitarra(guitarra6); agregarGuitarraSeleccionada(guitarra6);
    Toastify({
        text: "Agregaste Fender Telecaster al carrito",
        className: "info",
        style: {
          background: "#a52a2a",
        }
      }).showToast();

});

document.addEventListener('DOMContentLoaded', function () {
  
  const infoButtons = document.querySelectorAll('[id^="info"]');
  
  
  infoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const guitarraId = button.id.replace('info', ''); 
      
      fetch('guitarras.json')
        .then(response => response.json())
        .then(data => {
          const guitarra = data[guitarraId - 1]; 
          mostrarInformacionGuitarra(guitarra); 
        })
        .catch(error => console.error('No se pudo cargar los datos:', error));
    });
  });
});

function mostrarInformacionGuitarra(guitarra) {

  const mensaje = `
    <h3>${guitarra.marca} ${guitarra.modelo}</h3>
    <p>Color: ${guitarra.color}</p>
    <p>Año: ${guitarra.año}</p>
    <p>Precio: $${guitarra.precio}</p>
  `;


  Swal.fire({
    html: mensaje,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  });
}






const marcas = [];


guitarras.forEach( (tipo)=> {

    const existe = marcas.some(cat => cat === tipo.marca)

    if (!existe){
        marcas.push(tipo.marca)
    }
}

)




const guitarrasSeleccionadas = [];

function mostrarInfoGuitarra(guitarra) {
    const mensaje = `${guitarra.marca}, ${guitarra.modelo}, ${guitarra.año} - ${guitarra.precioConIva()}`;
    console.log(mensaje);
}

function agregarGuitarraSeleccionada(guitarra) {
    
    const index = guitarrasSeleccionadas.findIndex(g => g.marca === guitarra.marca && g.modelo === guitarra.modelo);
    
    if (index === -1) {
        

        guitarrasSeleccionadas.push(guitarra);
        console.log(`Guitarra ${guitarra.marca} ${guitarra.modelo} agregada a la lista de seleccionadas.`);
    } else {
        console.log(`La guitarra ${guitarra.marca} ${guitarra.modelo} ya está en la lista de seleccionadas.`);
    }

    
    agregarAlCarrito(guitarrasSeleccionadas);




      Swal.fire({
        title: "¿Desea seguir comprando?",
        showDenyButton: true,
  
        confirmButtonText: "Si!",
        denyButtonText: `No, gracias`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
          Swal.fire("Gracias por confiar en nosotros!");
        }
      });
}



// Agregar al localStorage


function agregarAlCarrito(guitarrasSeleccionadas) {
    
    let guitarrasLocalStorage = JSON.parse(localStorage.getItem('guitarrasSeleccionadas')) || [];
    
    
    guitarrasSeleccionadas.forEach(guitarra => {
       
        const index = guitarrasLocalStorage.findIndex(g => g.marca === guitarra.marca && g.modelo === guitarra.modelo);
        
        
        if (index === -1) {
            guitarrasLocalStorage.push(guitarra);
            console.log(`Guitarra ${guitarra.marca} ${guitarra.modelo} agregada a la lista de seleccionadas.`);
        }
    });

    
    localStorage.setItem('guitarrasSeleccionadas', JSON.stringify(guitarrasLocalStorage));
}



























console.log(" Bienvenido a nuestra tienda de guitarras!");





