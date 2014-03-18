/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var arrayClientes = new Array();
var codCliente = 1;

function add(cliente) {
    arrayClientes.push(cliente);
    serializar();
}

function borrar(code) {
    if (confirm("¿Desea borrar este cliente?")) {
        deserializar();
        arrayClientes.splice(code, 1);
        serializar();
        document.location = 'listar.jsp';
    }
}

function filter(){
    deserializar();
    var dni = document.forms["filter"]["dni"].value;
    for (i = 0; i < arrayClientes.length; i++) {
        if(arrayClientes[i].dni === dni){
            document.getElementById("listaFiltrada").innerHTML += "CodCliente: " +
                arrayClientes[i].codCliente + " Cliente: " + arrayClientes[i].nombre +
                " <a href=\"modify.jsp?code=" + i + "\">Editar</a> <a href=\"javascript:borrar(" + i + ")\">Borrar</a><br>";
        }
    }
}

function modify() {
    var codigo = document.forms["modify"]["codigo"].value;
    arrayClientes[codigo].nombre = document.forms["modify"]["nombre"].value;
    arrayClientes[codigo].apellidos = document.forms["modify"]["apellidos"].value;
    arrayClientes[codigo].fNac = document.forms["modify"]["fNac"].value;
    arrayClientes[codigo].dni = document.forms["modify"]["dni"].value;
    serializar();
}

function listAll() {
    deserializar();
    for (i = 0; i < arrayClientes.length; i++) {
        document.getElementById("lista").innerHTML += "CodCliente: " +
                arrayClientes[i].codCliente + " Cliente: " + arrayClientes[i].nombre +
                " <a href=\"modify.jsp?code=" + i + "\">Editar</a> <a href=\"javascript:borrar(" + i + ")\">Borrar</a><br>";
    }
}

function anadir() {
    nombre = document.forms["login"]["nombre"].value;
    apellidos = document.forms["login"]["apellidos"].value;
    fNac = document.forms["login"]["fNac"].value;
    dni = document.forms["login"]["dni"].value;

    add(new Cliente(nombre, apellidos, fNac, dni, codCliente));
    codCliente++;
}

function cargarDatos() {
    var Url = location.href;
    var codigo;
    url = Url.replace(/.*\?(.*?)/, "$1");
    variables = url.split("&");
    for (i = 0; i < variables.length; i++) {
        codigo = variables[i].split("=");
        eval('var ' + codigo[0] + '="' + codigo[1] + '"');
    }
    deserializar();
    document.forms["modify"]["nombre"].value = arrayClientes[code].nombre;
    document.forms["modify"]["apellidos"].value = arrayClientes[code].apellidos;
    document.forms["modify"]["fNac"].value = arrayClientes[code].fNac;
    document.forms["modify"]["dni"].value = arrayClientes[code].dni;
    document.forms["modify"]["codigo"].value = code;

}

function serializar() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("CLIENTES", JSON.stringify(arrayClientes));
    } else {

    }
}

function deserializar() {
    if (typeof (Storage) !== "undefined") {
        arrayClientes = JSON.parse(sessionStorage.getItem("CLIENTES"));
    } else {

    }
}


function avisoNombre() {
    var patron = /[A-Za-z]/;
    var nombre = document.getElementById("nombre").value;
    if (patron.test(nombre)) {
        document.getElementById("nombre").style.backgroundColor = "white";
    } else {
        document.getElementById("nombre").value = "Campo no relleno";
        document.getElementById("nombre").style.backgroundColor = "#ff7878";
    }
}

function avisoApellido() {
    var patron = /[A-Za-z]/;
    var nombre = document.getElementById("apellidos").value;
    if (patron.test(nombre)) {
        document.getElementById("apellidos").style.backgroundColor = "white";
    } else {
        document.getElementById("apellidos").value = "Campo no relleno";
        document.getElementById("apellidos").style.backgroundColor = "#ff7878";
    }
}

function avisoDNI() {
    var patron = /^[0-9]{8}[A-Z]{1}$/;
    var nombre = document.getElementById("dni").value;
    if (patron.test(nombre)) {
        document.getElementById("dni").style.backgroundColor = "white";
    } else {
        document.getElementById("dni").value = "Campo no relleno";
        document.getElementById("dni").style.backgroundColor = "#ff7878";
    }
}

function validarFormatoFecha() {
    var fecha = document.getElementById("fNac").value;
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year, month, '0');
    if ((day - 0) > (date.getDate() - 0)) {
        document.getElementById("fNac").style.backgroundColor = "#ff7878";
    }
}