/*var titulo = document.querySelector("#titulo");
console.log(titulo);*/

// PASO 1: Obtener elementos
var numero1 = document.querySelector("#numero1");
var numero2 = document.querySelector("#numero2");
var resultado = document.querySelector("#resultado");
var titulo = document.querySelector("p");
var imagen = document.querySelector("#imagenPerfil");

function cambiarEstilo(){
    numero1.style.background = "red";
    numero2.style.fontSize = "50px";
    resultado.style.color = "blue";
    titulo.innerText = "Dojo Calculadora!";
    imagen.src = "https://octodex.github.com/images/parentocats.png";
}

// PASO 2: Crear metodos
function sumar(){
    console.log("Metodo Sumar");
    
    // PASO 3: Obtener valores
    var valorNumero1 = numero1.value;
    console.log(valorNumero1);

    var valorNumero2 = numero2.value;
    console.log(valorNumero2);

    var suma = parseInt(valorNumero1) + parseInt(valorNumero2);
    console.log(suma);
    resultado.value = suma;
}

function restar(){
    console.log("Metodo Restar");

    var valorNumero1 = numero1.value;
    var valorNumero2 = numero2.value;

    var resta = parseInt(valorNumero1) - parseInt(valorNumero2);
    resultado.value = resta;
}