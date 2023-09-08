var textNombre = document.querySelector("#nombre");
var imageAmistad = document.querySelector("#amistad1");
var amistad2 = document.querySelector("#amistad2");
var textLikes = document.querySelector("#numLikes");


function cambiarNombre(){
    textNombre.innerText = "Juan Valdez";
}

function aceptarAmistad(){
    imageAmistad.remove();
    amistad2.remove();

    var numeroLikes = textLikes.innerText;
    var nuevoNumeroLikes = parseInt(numeroLikes) + 1;

    textLikes.innerText = nuevoNumeroLikes;
}