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
    </head>
    <body>
        <form id="filter">
            <h1>Entrar</h1>
            <fieldset id="inputs">
                <input name="dni" id="dni" type="text" placeholder="DNI del Cliente" required onFocus="avisoDNI()"  onblur="avisoDNI()">
            </fieldset>
            <fieldset id="actions">
                <input type="button" id="submit" value="Entrar" onclick="filter()">
            </fieldset>
        </form>
        <div id="listaFiltrada"></div>
    </body>
</html>
