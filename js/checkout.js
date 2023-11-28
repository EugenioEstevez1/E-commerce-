const tbody = document.querySelector('tbody')
const list = document.querySelector("#eliminar");

function tablaHTML(productoCarrito) {
  return `<tr>
    <td>${productoCarrito.codigo}</td>
    <td>${productoCarrito.nombre}</td>
    <td>${productoCarrito.importe}</td>
    <td>
    <button  class="btn btn-danger btn-sm delete">Eliminar</button>
    </td>
    </tr>`
}

if (carritoProductos.length > 0) {
  carritoProductos.forEach(productoCarrito => {
    tbody.innerHTML += tablaHTML(productoCarrito)
  })
}

document.querySelector("#clave").addEventListener("click", (e) => {
  target = e.target;
  target.classList.contains("delete") ? target.parentElement.parentElement.remove() : null

});

function eliminarElementoCarrito(clave) {
  if (typeof Storage !== "undefined") {
    let carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];
    let indice = carrito.findIndex(item => item.clave === clave);
    indice !== -1 ? (carrito.splice(indice, 1), localStorage.setItem("miCarrito", JSON.stringify(carrito))) : null;
  }

}

document.querySelector("#clave").addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("delete")) {
    let clave = target.parentElement.parentElement.dataset.clave;
    eliminarElementoCarrito(clave);
    mensajeToast()


  }
});

function mensajeToast() {
  Toastify({
    text: `Se eliminó el producto del carrito.`,
    duration: 1500,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "red",
      color: "white",
    }
  }).showToast();
}
