
const logo = document.querySelector('#logo');
const tableBody = document.querySelector('#div-productos');
const inputSearch = document.querySelector('#inputSearch');
const selectCategoria = document.getElementById('categoria');

let productosFiltrados = [];

function obtenerProductos() {
    fetch(array)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            arrayProductos.push(...datos);
            productosFiltrados = [...arrayProductos];
        })
        .then(() => cargarProductos())
        .catch((error) => console.error('Error al mostrar datos', error));
}

obtenerProductos();


const cardProductosHTML = (prod) => {
    return `<div class="div-card" >
    <div class="imagen"><img src="${prod.imagen}"></div>
    <div class="nombre"><p>${prod.nombre}</p></div>
    <div class="importe"><p>${prod.importe}</p></div>
    <div class="codigo"><button id="${prod.codigo}" class="button button-outline">Agregar</button></div>
   </div>`;
};

function cargarProductos() {
    tableBody.innerHTML = '';
    productosFiltrados.forEach((producto) => {
        tableBody.innerHTML += cardProductosHTML(producto);
    });
    activarClickEnBotones();
}

function filtrarProductos() {
    const categoriaSeleccionada = selectCategoria.value;
    if (categoriaSeleccionada === '') {
        productosFiltrados = [...arrayProductos];
    } else {
        productosFiltrados = arrayProductos.filter((producto) => producto.categoria === categoriaSeleccionada);
    }
    cargarProductos()
}

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline');
    for (let boton of botones) {
        boton.addEventListener('click', (e) => {
            const productoElegido = arrayProductos.find((mate) => mate.codigo === e.target.id);
            carritoProductos.push(productoElegido);
            mensajeToast(productoElegido.nombre);
            localStorage.setItem('miCarrito', JSON.stringify(carritoProductos));
        });
    }
}

function mensajeToast(mate) {
    Toastify({
        text: `${mate} se agregó al carrito.`,
        duration: 3000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: 'lightgrey',
            color: 'black',
        },
    }).showToast();
}
