const tbody = document.querySelector('tbody')
const list = document.querySelector("#eliminar");

function tablaHTML(productoCarrito){
    return `<tr>
    <td>${productoCarrito.codigo}</td>
    <td>${productoCarrito.nombre}</td>
    <td>${productoCarrito.importe}</td>
    <td>
    <button  class="btn btn-danger btn-sm delete">Eliminar</button>
    </td>
    </tr>`
}

if (carritoProductos.length > 0){
    carritoProductos.forEach(productoCarrito => {
        tbody.innerHTML += tablaHTML(productoCarrito)
    })
}

document.querySelector("#eliminar").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
    }
});
