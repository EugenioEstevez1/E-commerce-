const arrayProductos = []
const array = 'js/mate.json'
const carritoProductos = recuperarLS()


function recuperarLS() {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}



