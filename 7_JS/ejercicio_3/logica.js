var dinero = 100;

var leche = 15; // 5
var galleta = 5; // 3
var pollo = 30; // 2
var arroz = 25; // 6

if(leche * 5 <= dinero){
    console.log("Puedes Comprar 5 latas de leche");

    dinero = dinero - (leche * 5);
    console.log("Me queda: " + dinero);
}

if(galleta * 3 <= dinero){
    console.log("Puedes Comprar 3 Galletas");

    dinero = dinero - (galleta * 3);
    console.log("Me queda: " + dinero);
}

if(pollo * 2 <= dinero){
    console.log("Puedes Comprar 2 Pollos");

    dinero = dinero - (pollo * 2);
    console.log("Me queda: " + dinero);
}

if(arroz * 6 <= dinero){
    console.log("Puedes Comprar 6 bolsas de arroz");

    dinero = dinero - (arroz * 6);
    console.log("Me queda: " + dinero);
}




var number = 21;

// Verificar si el number es multiple 3
// Verificar si el number es multiple 5
// Verificar si el number es multiple 3 y 5
// Verificar si el number no es multiple de ninguno

if(number % 3 == 0){
    console.log("Es divisible entre 3");
}

if(number % 5 == 0){
    console.log("Es divisible entre 5");
}

if(number % 3 == 0 && number % 5 == 0){
    console.log("Es divisible entre 3 y 5 a la vez");
}

if(number % 3 != 0 && number % 5 != 0){
    console.log("No Es divisible entre 3 y 5 a la vez");
}

// Condicionales dentro de un metodo

function verificarSiEsPar(numero){
    if(numero % 2 == 0){
        console.log("El numero es Par");
    } else {
        console.log("El numero es imPar");
    }
}

verificarSiEsPar(15);
verificarSiEsPar(8);


function verificarInicioSesion(email, pass){
    if(email == "admin@gmail.com" && pass == "654321"){
        console.log("Inicio de sesion correcto");
    } else {
        console.log("Inicio de sesion incorrecto");
    }
}

verificarInicioSesion("ricardo.vasquez@gmail.com", "123456");
verificarInicioSesion("admin@gmail.com", "654321");