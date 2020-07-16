function mostrar() {
    var contador;
    var acumulador;
    var numeroIngresado;

    contador = 0;
    acumulador = 0;

    while (contador < 5) {
        numeroIngresado = prompt("Ingrese un numero");
        if (numeroIngresado === null) {
            return; // Permite salir al usuario si presiona cancel
        }
        numeroIngresado = parseInt(numeroIngresado);
        acumulador += numeroIngresado;
        contador++;

    }


    txtIdSuma.value = acumulador;
    txtIdPromedio.value = acumulador / 5;
} //FIN DE LA FUNCIÓN