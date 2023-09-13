var inputNumero = document.getElementById("numero");
var inputNumero2 = document.getElementById("numero2");
var labelResultado = document.getElementById("resultado");

function verificarNumero(){
    var valor1 = parseInt(inputNumero.value);
    var valor2 = parseInt(inputNumero2.value);

    if((valor1 + valor2) % 2 == 0){
        labelResultado.innerText = "Par";
    } else {
        labelResultado.innerText = "ImPar";
    }
}