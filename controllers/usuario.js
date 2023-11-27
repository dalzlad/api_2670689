const {response} = require('express')

const Usuario = require('../models/usuario')

const getUsuario = async(req, res) => {

    const usuarios = await Usuario.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: usuarios
    })
}

const postUsuario = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const usuario = new Usuario(datos) //Instanciar el objeto
        await usuario.save() //Guardar en la base de dato
        console.log(usuario)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putUsuario = async(req, res) => {
    const { nombre, password, rol, estado } = req.body //Desesctructurar
    let mensaje = ''
    try {
        const usuario = await Usuario.findOneAndUpdate({nombre: nombre},
        {password:password, rol:rol, estado:estado})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteUsuario = async(req, res) => {
    const { nombre } = req.query //Desesctructurar
    let mensaje = ''
    try {
        const usuario = await Usuario.findOneAndDelete({nombre: nombre})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}

