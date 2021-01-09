function validar() {
    var nombre,usuario, correo, clave, expresion;
    nombre = document.getElementById("nombre").value;
    usuario = document.getElementById("usuario").value;
    correo = document.getElementById("correo").value;
    clave = document.getElementById("password").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" ||  usuario == "" || correo == "" || clave == "" ){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        alert("Datos ingresados correctamente");
        window.location = "login.html";
        return false;
    }
}