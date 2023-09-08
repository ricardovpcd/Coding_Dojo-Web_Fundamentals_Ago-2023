/* CALCULADORA */
var numero1 = document.querySelector("#numero1");
var numero2 = document.querySelector("#numero2");
var resultado = document.querySelector("#resultado");

// .value = input, textarea, radiobuttons, checkbox
// .innterText = p, label

function sumar(){
    var valorNumero1 = numero1.value;
    var valorNumero2 = numero2.value;

    var suma = parseInt(valorNumero1) + parseInt(valorNumero2);
    resultado.value = suma;
}

function restar(){
    var valorNumero1 = numero1.value;
    var valorNumero2 = numero2.value;

    var resta = parseInt(valorNumero1) - parseInt(valorNumero2);
    resultado.value = resta;
}

function limpiar(){
    numero1.value = "";
    numero2.value = "";
    resultado.value = "";
}

function incrementarNumero1(){
    var valorNumero1 = numero1.value;
    var incrementado = parseInt(valorNumero1) + 1;

    numero1.value = incrementado;
}

/* LIKES CON VARIABLE */
/*var numLikes = document.querySelector("#numLikes");
var likes = 0;

function like(){
    likes = likes + 1; // likes += 1;
    //numLikes.value = likes;
    numLikes.innerText = likes;
}*/

/* LIKES SIN VARIABLE */
var numLikes = document.querySelector("#numLikes");

function like(){
    var valorLikes = numLikes.innerText;
    valorLikes = parseInt(valorLikes) + 1;
    //var incrementare = parseInt(valorLikes) + 1;

    numLikes.innerText = valorLikes;
}

function esconderLikes(){
    numLikes.style.display = "none";
}

function mostrarLikes(){
    numLikes.style.display = "inline";
}