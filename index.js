//Importar paquetes
require('dotenv').config() //Dependencia para vincular variables de entorno

//Importar clases o arhivos necesarias
const {Server} = require('./models/server')

const server = new Server()//Creando instancia

server.listen()