/*function siempreHambriento(arr){
    var countComida = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "comida"){
            console.log("delicioso");
            countComida++;
        }
    }

    if(countComida == 0){
        console.log("Tengo Hambre");
    }
}

var lista = [3.14, "comida", "pastel", true, "comida"];
siempreHambriento(lista);

var lista2 = [4, 1, 5, 7, 2];
siempreHambriento(lista2);*/

// EJERCICIO 2
/*function highPass(arr, cutoff){
    var res = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            //console.log(arr[i]);
            res.push(arr[i]);
        }
    }

    return res;
}

var listaNumeros = [6, 8, 3, 10, -2, 5, 9];
var numeroMayor = 5;

var result = highPass(listaNumeros, numeroMayor);
console.log(result);*/

// EJERCICIO 3
/*for(var numero = 1; numero <= 100; numero++){
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");
    } else if(numero % 3 == 0){
        console.log("Fizz");
    } else if(numero % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}*/

// EJERCICIO 4
// Index             0      1          2          3        4
var listaCarros = ["BMW", "Subaru", "Mercedes", "Audi", "Toyota"];
listaCarros[0];
listaCarros[1];
listaCarros[2];


for(var indice = 0; indice < listaCarros.length; indice++){
    //console.log(listaCarros[indice]);
    if(listaCarros[indice] == "Audi"){
        console.log("Este es mi carro");
    }
}

// 1° iteracion: indice = 0
// 2° iteracion: indice = 1
// 3° iteracion: indice = 2