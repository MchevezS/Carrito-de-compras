let carrito = [];
let total = 0;

// Funcion para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el carrito desde localStorage si existe
    cargarCarritoDesdeLocalStorage();
    
    const btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click', () => {
        const nombreProducto = document.getElementById('nombreProducto').value;
        const precioProducto = parseFloat(document.getElementById('precioProducto').value);

        if (nombreProducto !== '' && !isNaN(precioProducto) && precioProducto > 0) {
            agregarAlCarrito(nombreProducto, precioProducto);
        } else {
            alert('Por favor ingresa un nombre válido y un precio mayor a 0.');
        }
        window.location.href=window.location.href // Se refresca /o se actuliza la pagina por si sola
    });
    
});

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    guardarCarritoEnLocalStorage();
    actualizarCarrito();
}

// Funcion para eliminar un producto del carrito por su indice //  Parametro que le agregue 
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarritoEnLocalStorage();
    actualizarCarrito();
}

// Funcion para actualizar el contenido del carrito en la pagina- // P// Hice que mis productos se puedan eliminar   // Se suman todos los precios de los productos
function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    total = 0;

    carrito.forEach((item, index) => {
        carritoDiv.innerHTML += `
                                         
            <p>
                ${item.nombre} - $${item.precio.toFixed(2)} 
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </p>
        `;
        total += item.precio; 
    });

    document.getElementById('total').innerText = total.toFixed(2);
}


// Función para cargar el carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

