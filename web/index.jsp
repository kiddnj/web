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
            
        </script>
    </head>
    <body>
        <form id="login">
            <h1>Entrar</h1>
            <fieldset id="inputs">
                <input name="nombre" id="nombre" type="text" placeholder="Nombre" required onFocus="avisoNombre()" onblur="avisoNombre()">   
                <input name="apellidos" id="apellidos" type="text" placeholder="Apellidos" required onFocus="avisoApellido()"  onblur="avisoApellido()">
                <input name="fNac" id="fNac" type="date" placeholder="Fecha de nacimiento" required onFocus="validarFormatoFecha()"  onblur="validarFormatoFecha()">
            </fieldset>
            <fieldset id="actions">
                <input type="button" id="submit" value="Entrar" onclick="anadir()">
                <input type="button" id="submit" value="Listar" onclick="document.location = 'listar.jsp'">
            </fieldset>
        </form>
    </body>
</html>
