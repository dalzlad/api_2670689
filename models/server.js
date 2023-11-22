const express = require('express')
const cors  = require('cors');//Implementar seguridad
const { dbConection } = require('../database/config')
const bodyParser = require('body-parser')

class Server{
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/usuario' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
         this.port, () => {
            console.log('Escuchando por el puerto'+this.port)
         }
        )
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }

    middlewares(){
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use(bodyParser.json())
    }

    async conectarDB(){
        await dbConection()
    }
}

module.exports = {Server} //Exportación de la clase

/*
git:

https://github.com/dalzlad/2670689.git

*/

/*
Crear el método get y post para una colección de su proyecto.
Emplear un array de objetos para alamcenar la información

*/