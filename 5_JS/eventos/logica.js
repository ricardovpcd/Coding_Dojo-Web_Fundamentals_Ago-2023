function escribiendo(){
    var elementoUsuario = document.querySelector("#usuario");
    var valor = elementoUsuario.value;
    
    console.log(valor);

    var elementoPalabra = document.querySelector("#palabra");
    elementoPalabra.innerText = valor;
}