/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var codCliente;
var nombre;
var apellidos;
var fNac;

function Cliente(nombre, apellidos, fNac, codCliente) {
    this.codCliente = codCliente;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fNac = fNac;
    
    this.getNombre = getNombre;
    this.setNombre = setNombre;
}

function getNombre() {
    return nombre;
}

function getApellidos() {
    return apellidos;
}

function getFNac() {
    return fNac;
}

function getCodCliente() {
    return codCliente;
}

function setNombre(nombre) {
    this.nombre = nombre;
}

function setApellidos(apellidos) {
    this.apellidos = apellidos;
}

function setFNac(fNac) {
    this.fNac = fNac;
}

function setCodCliente(codCliente) {
    this.codCliente = codCliente;
}
