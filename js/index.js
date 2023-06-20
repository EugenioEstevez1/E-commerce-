
const titulo = document.getElementById('titulo')
const logo = document.querySelector('#logo')
const tableBody = document.querySelector('#div-productos')
const inputSearch = document.querySelector('input#inputSearch')

titulo.innerText = 'MATEAR'



const cardProductosHTML = (prod)=> {
    return `<div class="div-card" >
    <div class="imagen"><img src= "${prod.imagen}"></div>
    <div class="nombre"><p>${prod.nombre}</p></div>
    <div class="importe"><p>${prod.importe}</p></div>
    <div class="codigo"><button id="${prod.codigo}" class="button button-outline">Agregar</button></div>
   </div>`
}

const filtrarProductos = ()=> {
    let arrayResultado = arrayProductos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
inputSearch.addEventListener('search', filtrarProductos)



const cargarProductos = (array)=> {
    tableBody.innerHTML = ''
    array.forEach((producto) => {
        tableBody.innerHTML += cardProductosHTML(producto)
        activarClickEnBotones()
    })
}
cargarProductos(arrayProductos)

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
    for (let boton of botones) {
        boton.addEventListener('click', (e) => {
            const productoElegido = arrayProductos.find((mate) => mate.codigo === parseInt(e.target.id))
            carritoProductos.push(productoElegido)
            localStorage.setItem('miCarrito', JSON.stringify(carritoProductos))
        })
    }
}











