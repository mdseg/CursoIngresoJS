/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
    var numeroIngresado;
    numeroIngresado = -1;
    while (numeroIngresado < 0 || numeroIngresado > 9) {
        numeroIngresado = prompt("ingrese un número entre 0 y 10.");

    }

} //FIN DE LA FUNCIÓN