const {Schema, model } = require('mongoose')

const UsuarioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requirido']
    },

    password:{
        type:String,
        required:[true, 'El password es requeridod'],
        min:[4, 'El password debe contener mínimo 4 caracteres'],
        max:[10, 'El password debe contener máximo 10 caracteres']
    },

    rol: {
        type:String,
        required:[true, 'El rol es requerido'],
        enum:['Admin', 'Usuario'],
    },

    estado: {
        type:Boolean,
        default:true
    }
})

module.exports = model('Usuario', UsuarioSchema)
