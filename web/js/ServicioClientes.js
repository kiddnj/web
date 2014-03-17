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

function borrar(posicion) {
    if (posicion >= 0 && posicion < arrayClientes.length) {
        arrayClientes.splice(posicion, 1);
        serializar();
    }else{
        alert("Posicion no valida");
    }

}

function search() {
    
}

function modify() {
    var codigo = document.forms["modify"]["codigo"].value;
    arrayClientes[codigo-1].nombre = document.forms["modify"]["nombre"].value;
    arrayClientes[codigo-1].apellidos = document.forms["modify"]["apellidos"].value;
    arrayClientes[codigo-1].fNac = document.forms["modify"]["fNac"].value;
    serializar();
}

function listAll() {
    deserializar();
    for (i = 0; i < arrayClientes.length; i++) {
        document.getElementById("lista").innerHTML += "CodCliente: " +
                arrayClientes[i].codCliente + " Cliente: " + arrayClientes[i].nombre + "<br>";
    }
}

function filter() {

}


function anadir() {
    nombre = document.forms["login"]["nombre"].value;
    apellidos = document.forms["login"]["apellidos"].value;
    fNac = document.forms["login"]["fNac"].value;

    add(new Cliente(nombre, apellidos, fNac, codCliente));
    codCliente++;
}

function cargarDatos(){
    var codigo = document.forms["modify"]["code"].value;
    deserializar();
    document.forms["modify"]["nombre"].value = arrayClientes[codigo].nombre;
    document.forms["modify"]["apellidos"].value = arrayClientes[codigo].apellidos;
    document.forms["modify"]["fNac"].value = arrayClientes[codigo].fNac;
    document.forms["modify"]["codigo"].value = arrayClientes[codigo].codCliente;
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