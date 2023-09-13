var edadRicardo = 15;
var edadJuan = 15;
var edadCarla = "14";

// var1 == var2 => true / false
console.log(edadRicardo == edadJuan);
console.log(edadJuan == edadRicardo);

// var1 != var2 => true / false
console.log(edadRicardo != edadJuan);

// var1 < var2 => true / false
console.log(edadRicardo < edadJuan);
console.log(edadJuan < edadRicardo);

// var1 > var2 => true / false
console.log(edadRicardo > edadJuan);
console.log(edadJuan > edadRicardo);

// var1 <= var2 => true / false
console.log(edadRicardo <= edadJuan); // true

// var1 >= var2 => true / false
console.log(edadRicardo >= edadJuan); // true

// if()
if(edadRicardo == edadJuan){ //false
    console.log("Edad Ricardo es Igual a Edad Juan");
} else {
    console.log("Edad Ricardo es Diferente a Edad Juan");
}

// if, else if and else
if(edadRicardo < 18){ // Si es Menor de edad
    console.log("Ricardo es Menor de edad");
} else if(edadRicardo < 60){ // Si es edad promedio
    console.log("Ricardo es Edad Promedio");
} else if(edadRicardo < 90){ // si es adulto
    console.log("Ricardo es Adulto");
} else {
    console.log("Ricardo es Inmortal");
}