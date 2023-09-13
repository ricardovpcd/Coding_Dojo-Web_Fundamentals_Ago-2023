var edadRicardo = 15;
var edadJuan = 20;
var edadCarla = 40;

// && == Todas las operaciones tienen que ser true
if(edadRicardo < edadJuan && edadRicardo < edadCarla){ // true && true
    console.log("Ricardo es Menor a Juan y a Carla");
}

if(edadJuan < edadRicardo && edadJuan < edadCarla){ // false && true
    console.log("Juan es Menor a Ricardo y a Carla");
}

// || == al menos 1 operacion tiene que ser true
if(edadCarla < edadJuan || edadCarla > edadRicardo){ // false || true
    console.log("Carla es mayor que alguien");
}

if(edadJuan < edadRicardo || edadJuan < edadCarla){ // false || true
    console.log("Juan es menor que alguien");
}