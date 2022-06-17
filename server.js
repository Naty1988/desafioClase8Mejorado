const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', rutas)

app.listen(8080, err => {
    if(err) {
        console.log(`Ocurrió un error: ${err}`)
    } else {

        console.log('Escuchando el puerto 8080')
    }


})
