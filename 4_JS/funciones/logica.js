var nombre = "Ricardo";
console.log(nombre);

function adicionar(num1, num2){
    /*var numero1 = 5;
    var numero2 = 3;*/
    console.log(num1 - num2 - 10);
}

adicionar(1, 3);
adicionar(5, 6);
adicionar(10, 20);

/* EJERCICIO */
// Crear un metodo que convierta e imprima las horas en segundos

function convertidor(horas){
    // OPCION 1
    var segundosEnHoras = 3600;
    horas *= segundosEnHoras; //horas = horas * segundosEnHoras;
    console.log(horas);

    //OPCION 2
    console.log(horas * 3600);
}

convertidor(5);
convertidor(4);


/* RETURN */
function multiplicar(numero1, numero2){

    numero1 /= 2;

    return numero1 * numero2;
}

var resultado = multiplicar(6, 7);
console.log(resultado);