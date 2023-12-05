//Paquete para generar el token
const jwt = require('jsonwebtoken')

const generarJWT = ( datos = '') => {
    return new Promise((resolve, reject) => {
        const payload = { datos }
        jwt.sign(payload, process.env.SECRETKEY, {//Generar TOKEN
            expiresIn : '5m',//tiempo expiración
        }, (err, token) => {
            if( err ){
                console.log(err)
                reject('No se pudo generar el token')
            }
            else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}