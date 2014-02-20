<%-- 
    Document   : index
    Created on : 19-feb-2014, 12:36:06
    Author     : fran
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript" src="js/Cliente.js"></script>
        <script type="text/javascript" src="js/ServicioClientes.js"></script>
        <script type="text/javascript">
            var codCliente = 1;
            function anadir(){
                nombre = document.getElementById("nombre").value;
                apellidos = document.getElementById("apellidos").value;
                fNac = document.getElementById("fNac").value;
                
                add(new Cliente(nombre,apellidos,fNac,codCliente));
                codCliente++;
            }
        </script>
    </head>
    <body>
        <form id="login">
            <h1>Entrar</h1>
            <fieldset id="inputs">
                <input id="nombre" type="text" placeholder="Nombre" required>   
                <input id="apellidos" type="text" placeholder="Apellidos" required>
                <input id="fNac" type="text" placeholder="Fecha de nacimiento" required>
            </fieldset>
            <fieldset id="actions">
                <input type="button" id="submit" value="Entrar" onclick="anadir()">
            </fieldset>
        </form>
    </body>
</html>
