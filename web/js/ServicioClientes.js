/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var arrayClientes = new Array();

function add(cliente) {
    arrayClientes.push(cliente);
    serializar();
}

function borrar() {

}

function search() {

}

function modify() {

}

function listAll() {
    deserializar();
    for (i = 0; i < arrayClientes.length; i++) {
        //document.write("CodCliente: " + arrayClientes[i].codCliente + "<br>" + "Cliente: " + arrayClientes[i].nombre);
        //document.write("<br><br>");
        document.write("<li>CodCliente: " + arrayClientes[i].codCliente + " Cliente: " + arrayClientes[i].nombre + "</li>");
    }
}

function filter() {

}

function serializar(){
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("CLIENTES",JSON.stringify(arrayClientes));
    }else{
        
    }
}

function deserializar(){
    if(typeof(Storage) !== "undefined"){
        arrayClientes = JSON.parse(localStorage.getItem("CLIENTES"));
    }else{
        
    }
}


function avisoNombre() {
    if (document.getElementById("nombre").value === "") {
        document.getElementById("nombre").value = "Campo no relleno";
        document.getElementById("nombre").style.backgroundColor = "#ff7878";
    } else if (document.getElementById("nombre").value === "Campo no relleno") {
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").style.backgroundColor = "white";
    } else {
        document.getElementById("nombre").style.backgroundColor = "white";
    }
}

function avisoApellido() {
    if (document.getElementById("apellidos").value === "") {
        document.getElementById("apellidos").value = "Campo no relleno";
        document.getElementById("apellidos").style.backgroundColor = "#ff7878";
    }
    else if (document.getElementById("apellidos").value === "Campo no relleno") {
        document.getElementById("apellidos").value = "";
        document.getElementById("apellidos").style.backgroundColor = "white";
    } else {
        document.getElementById("apellidos").style.backgroundColor = "white";
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