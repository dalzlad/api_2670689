const Usuario = require('../models/usuario')
const { generarJWT } = require('../helpers/generar_jwt')
const jwt = require('jsonwebtoken');

const login = async(req, res) => {
    const { nombre, password } = req.body
    //Verificar si el nombre existe
    const usuarios = await Usuario.findOne({nombre})
    try {
        if(!usuarios){//Si encontró el nombre
            return res.status(400).json({
                msg: 'Correo electrónico no encontrado'
            })
        }

        if( !usuarios.estado ){//Estado falso
            return res.status(400).json({
                msg: 'Usuario inactivo'
            })            
        }

        if(password == usuarios.password){
            const token = await generarJWT(usuarios)
            return res.status(200).json({
                token
            })
        }
        else{
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            })   
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Apreciado usuario contacte al administrador.'
        })
    }
}

module.exports = {
    login
}
