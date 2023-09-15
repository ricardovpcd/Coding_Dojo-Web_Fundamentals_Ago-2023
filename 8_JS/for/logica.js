var nombre = "Ricardo";
var edad = 28;
var isTeacher = true;

var tecnologias = ["HTML", "CSS", "JS"];

var edades = [28, 29, 56, 100];
var isTeachersList = [true, false, false, true];
var carros = [];
var historial = ["Como crear un condicional", "Que es JS", 50, "Que es HTML", 100, true];

//ARRAYS Y METODOS
//        Index =    0      1      2      3           4         5
/*var tecnologias = ["HTML", "CSS", "JS", "Reactjs", "MongoDB", "Nodejs"];

console.log("Original: ", tecnologias);
console.log(tecnologias[3]);
console.log(tecnologias.length);

tecnologias.push("Typescript");
tecnologias.push("Selectores");
console.log("Agregando 2 elementos: ", tecnologias);
console.log(tecnologias[6]);

tecnologias.pop();
tecnologias.pop();
tecnologias.pop();
console.log("Eliminando ultimo elemento: ", tecnologias);

tecnologias.unshift("Visual Code");
console.log("Agregando elemento al inicio: ", tecnologias);

tecnologias.shift();
tecnologias.shift();
console.log("Eliminando 2 elementos al inicio: ", tecnologias);*/

// FOR Y FOREACH
var listNombres = ["Ricardo", "Juan", "Alberto", "Clara", "Alejandra", "Victor", "Manuel", "Braulio"];

for(var contador = 0; contador < 5; contador++){
    var suma = 5 + contador;
    //console.log(suma);
}

// Primera iteracion: suma = 5
// Segunda iteracion: suma = 6
// tercera iteracion: suma = 7
// cuarta iteracion: suma = 8
// quinta iteracion: suma = 9

for(var numero = 1; numero < 21; numero++){
    if(numero % 2 != 0){
        //console.log(numero);
    }
}

for(var count = 0; count < 101; count++){
    if(count % 3 == 0){
        //console.log(count);
    }
}

for(var temp = 100; temp >= 0; temp--){
    if(temp % 3 == 0){
        //console.log(temp);
    }
}

// WHILE
/*var numero = 0;
var isActive = true;

while(isActive == true && numero % 2 == 0){
    console.log("Me sigo ejecutando " + numero);
    numero++;
}*/

// EJERCICIO
var suma = 0;

for(var counter = 1; counter <= 100; counter++){
    //console.log(counter);
    suma = suma + counter;
}

console.log(suma);

// suma = 0
// Primera iteracion: suma = 1 | counter = 1
// Segunda iteracion: suma = 3 | counter = 2
// tercera iteracion: suma = 6 | counter = 3
// cuarta iteracion: suma = 10 | counter = 4
// quinta iteracion: suma = 