var inputNombre = document.querySelector("#nombre");

function cambiarEstilo1(){
    inputNombre.classList.remove("estilo2");
    inputNombre.classList.add("estilo1");
}

function cambiarEstilo2(){
    inputNombre.classList.remove("estilo1");
    inputNombre.classList.add("estilo2");
}