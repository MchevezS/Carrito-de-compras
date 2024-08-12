let carrito = [];
let total = 0;

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
        window.location.href=window.location.href
    });
    
});

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    guardarCarritoEnLocalStorage();
    actualizarCarrito();
}
