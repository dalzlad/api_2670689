const mongoose = require('mongoose') //Dependencia para emplear mongoose

const dbConection = async() =>{
    try {
        //Establecer la conexión
        mongoose.connect(process.env.MONGO_CNN)
        console.log('CONEXION exitosa a la base de datos yyyyyyyy')
    } catch (error) {
        console.log(error)
    }
}

//Exportar la cadena de conexión
module.exports = { dbConection }