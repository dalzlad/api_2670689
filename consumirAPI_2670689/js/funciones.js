//const url = 'https://api-2670689.onrender.com/usuario'
const url = 'http://localhost:8282/usuario'

const listarUsuarios = async() => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaUsuarios = data.msg //msg es el nombre de la lista retorna con json
        console.log(listaUsuarios)
        listaUsuarios.map(function (usuario) {
            //Configurar el objeto para enviarlo por url
            objetoUsuario = Object.keys(usuario).map(key => key + '=' + 
            encodeURIComponent(usuario[key])).join('&');
            console.log(usuario)
            contenido = contenido + `<tr>`+
            `<td>`+usuario.nombre+`</td>`+
            `<td>`+usuario.rol+`</td>`+
            `<td>`+usuario.estado+`</td>`+
            `<td><button onclick="redireccionarEditar('${objetoUsuario}')">Editar</button></td>`+
            `</tr>`
        })
        objectId.innerHTML = contenido
    })

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}

const registrarUsuario= () => {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value
    const confirmarPassword = document.getElementById('confirmarPassword').value
    const rol = document.getElementById('rol').value
    const estado = document.getElementById('estado').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(password.length == 0){
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }                                                                   
    else if(rol == ""){
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }
    else if(estado == ""){
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if(password != confirmarPassword){
        alert('Las contraseñas no coinciden')
    }
    else{
        let usuario = {
            nombre: nombre,
            password: password,
            rol: rol,
            estado: estado
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg) //Imprimir el mensaje de la transacción
        })
        }
}

const actualizarUsuario= () => {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value
    const confirmarPassword = document.getElementById('confirmarPassword').value
    const rol = document.getElementById('rol').value
    const estado = document.getElementById('estado').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(password.length == 0){
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }                                                                   
    else if(rol == ""){
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }
    else if(estado == ""){
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if(password != confirmarPassword){
        alert('Las contraseñas no coinciden')
    }
    else{
        let usuario = {
            nombre: nombre,
            password: password,
            rol: rol,
            estado: estado
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(usuario),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg) //Imprimir el mensaje de la transacción
        })
        }
}

const redireccionarEditar = (objetoUsuario) => {
    document.location.href='editarUsuario.html?usuario='+objetoUsuario
}

const editarUsuario = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('nombre').value = urlParams.get('nombre')
    document.getElementById('password').value = urlParams.get('password')
    document.getElementById('rol').value = urlParams.get('rol')
    document.getElementById('estado').value = urlParams.get('estado')
}

if(document.querySelector('#btnRegistrar')){ //Si objeto exitste
document.querySelector('#btnRegistrar')
.addEventListener('click', registrarUsuario)
}

if(document.querySelector('#btnActualizar')){//Si objeto existe
document.querySelector('#btnActualizar')
.addEventListener('click', actualizarUsuario)
}