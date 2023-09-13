var number = 0;
if(number > 0){ // Si es mayor a 0  positivo
    console.log("El number es positivo");
} else if(number < 0){
    console.log("El number es negativo");
} else {
    console.log("El number es zero");
}

/* Ver si los minutos es mayor de 1 hora*/
var minutes = 60;
if(minutes < 60){ // Es menor que 1 hora

} else if(minutes > 60){ // Es mayor que 1 hora

} else { // Es igual a 1 hora

}

// Ver que puedo comprar con mi dinero
var dinero = 50;

var leche = 60;
var galleta = 15;
var pollo = 3;

if(dinero >= leche){
    console.log("Puedes comprar leche");
}

if(dinero >= galleta){
    var cantidad = dinero / galleta;
    console.log(parseInt(cantidad));
    console.log("Puedes comprar galleta");
}

if(dinero >= pollo){
    var cantidad = dinero / pollo;
    console.log(parseInt(cantidad));
    console.log("Puedes comprar pollo");
}


//  Verificar si el usuario y contraseña es correcto (usuario = "admin" y contraseña = "4dm1n")
var usuario = "carlos";
var password = "4dm1n";

if(usuario == "admin" || password == "4dm1n"){ // false || true
    console.log("usuario / contraseña correcto");   
} else {
    console.log("usuario / contraseña incorrecto"); 
}
