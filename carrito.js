let carrito = [];
let totalCompra = 0;

// Agregar al carrito transporte y animal //
function agregarAlCarrito() {
    const selectTransporte = document.getElementById("selectTransporte");
    const selectAnimal = document.getElementById("selectAnimal");

    const transporteSeleccionado = selectTransporte.options[selectTransporte.selectedIndex];
    const animalSeleccionado = selectAnimal.options[selectAnimal.selectedIndex];

    const medio = transporteSeleccionado.dataset.medio;
    const animal = animalSeleccionado.dataset.animal;
    const costoTotal = parseInt(transporteSeleccionado.value) + parseInt(animalSeleccionado.value);

    carrito.push({ medio, animal, costo: costoTotal });
    totalCompra += costoTotal;
    actualizarCarrito();
}

// Actualizar carrito //
function actualizarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = '';

    carrito.forEach((item) => {
        const elemento = document.createElement("li");
        elemento.textContent = `${item.medio} con ${item.animal} - $${item.costo}`;
        listaCarrito.appendChild(elemento);
    });

    document.getElementById("totalCompra").textContent = totalCompra;
}

// Fin compra //
function finalizarCompra() {
    if (carrito.length > 0) {
        alert("Compra finalizada. ¡Gracias por tu compra!");
        carrito = [];
        totalCompra = 0;
        actualizarCarrito();
    } else {
        alert("No tienes elementos en el carrito.");
    }
}