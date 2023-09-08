// elementoReprensatitvo
var inputNombre = document.querySelector("#nombre");

// accionReprensatitvo
function mostrarMensaje(){
    var texto = inputNombre.value;
    var mensaje = "Hola " + texto + " Bienvenido";
    alert(mensaje);
}