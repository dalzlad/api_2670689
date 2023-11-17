const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario') //Importando el controlador

route.get('/', getUsuario)

route.post('/', postUsuario)

route.put('/', putUsuario)

route.delete('/', deleteUsuario)

module.exports = route