function validar() {
    var nombre,usuario, correo, clave, expresion;
    nombre = document.getElementById("nombre").value;
    beneficiario = document.getElementById("beneficiario").value;
    fecha = document.getElementById("fecha").value;
    tipo_de_donacion = document.getElementById("tipo_de_donacion").value;
    detalle = document.getElementById("detalle").value;
    cantidad = document.getElementById("cantidad").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" ||  beneficiario == "" || fecha == "" || tipo_de_donacion == "" || detalle == "" || cantidad == "" ){
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        alert("Datos ingresados correctamente");
        window.location = "inicionormal.html";
        return false;
    }
}