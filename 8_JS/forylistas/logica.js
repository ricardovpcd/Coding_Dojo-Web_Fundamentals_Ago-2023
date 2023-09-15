var listNombres = ["Ricardo", "Juan", "Alberto", "Clara", "Alejandra", "Victor", "Manuel", "Braulio"];

/*console.log("CON CONSOLE LOG");
console.log(listNombres[0]);
console.log(listNombres[1]);
console.log(listNombres[2]);
console.log(listNombres[3]);*/

console.log("CON FOR");
for(var i = 0; i < listNombres.length; i++){
    //console.log("El nombre es: " + listNombres[i] + " Y el indice es: " + i);
    console.log(`El nombre es: ${listNombres[i]} y el indice es: ${i}`);
}

// FOR + ARRAY + METODO

function imprimirNumeros(lista){
    for(var indice = 0; indice < lista.length; indice++){
        console.log(lista[indice]);
    }
}

console.log("LISTA NUMERO 1");
var listaNumeros = [10, 20, 50, 32, 45, 56, 12];
imprimirNumeros(listaNumeros);

console.log("LISTA NUMERO 2");
var listaNumeros2 = [10, 20, 50, 32, 45, 56, 12, 23, 90];
imprimirNumeros(listaNumeros2);