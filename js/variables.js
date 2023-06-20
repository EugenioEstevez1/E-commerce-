function recuperarLS() {
    if (localStorage.getItem('miCarrito')) {
        return JSON.parse(localStorage.getItem('miCarrito'))
    } else {
        return []
    }
}

const carritoProductos = recuperarLS()

const arrayProductos = [{ codigo: 1, nombre: 'Mate de madera', importe: 3000, imagen:'images/matedemadera.png'},
{ codigo: 2, nombre: 'Mate de vidrio', importe: 2000, imagen: 'images/matedevidrio.png' },
{ codigo: 5, nombre: 'Termo Stanley', importe: 20000, imagen: 'images/termostanley.png' },
{ codigo: 6, nombre: 'Termo Montagne', importe: 22000, imagen: 'images/termomontagne.png' },
{ codigo: 8, nombre: 'Bombilla acero', importe: 1500, imagen: 'images/bombillaacero.png' },
 { codigo: 9, nombre: 'Bombilla alpaca', importe: 2000, imagen: 'images/bombillaalpaca.png' }
]

