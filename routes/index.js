const { Router } = require('express')
const router = Router()



const productos = []

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// GET '/api/productos' -> devuelve todos los productos.

router.get('/productos', (req, res) => {
    res.json(productos)
})

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

router.post('/productos', (req, res) => {

    const { nombre, precio, url } = req.body
    let id = productos.length + 1
    productos.push({ nombre, precio, url, id })
    res.sendStatus(201).json(productos)

})

// GET '/api/productos/:id' -> devuelve un producto según su id.

router.get('/productos/:id', (req, res) => {
    const id = Number(req.params.id)

    if (id > productos.length) {
        res.status(404).send({ error: 'Producto no econtrado' })
        return
    }


    let productoEncontrado = productos.find(elemento => elemento.id === id)
    console.log(productoEncontrado)
    res.json(productoEncontrado)
})

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

//     router.put('/api/productos/:idModificar', (req, res) => {

//         const idModificar = Number(req.params.idModificar)
//         console.log(idModificar)
//     // const { nombre, precio, url } = req.body

//     // productos({nombre, precio, url})
//     res.sendStatus(201).json(productos)
// })


// DELETE '/api/productos/:id' -> elimina un producto según su id.

router.delete('/productos/:idBorrar', (req, res) => {

    const idBorrar = Number(req.params.idBorrar)

    let productoEncontrado = productos.find(elemento => elemento.id === idBorrar)
    if (!productoEncontrado) {
        res.status(404).send({ error: 'Producto no econtrado' })
        return
    }
    let posicion = productos.indexOf(productoEncontrado)
    let itemBorrado = productos.splice((posicion), 1)
    console.log(productos)
    res.sendStatus(200)
})

module.exports = router