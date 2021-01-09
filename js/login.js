function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("username").value;
    clave = document.getElementById("password").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "1234"){
        window.location = "inicioadmin.html";
        return false;
    } else if(usuario == "usuario" && clave == "1234"){
        window.location = "inicionormal.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseña");
        return false;
    }
}