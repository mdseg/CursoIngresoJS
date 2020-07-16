/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() { // declarar variables

    //var banderaDelPrimero;
    var numeroIngresado;
    var numeroMaximo;
    var numeroMinimo;
    var respuesta;
    //iniciar variables

    /* Para detectar si estamos en una primera o segunda carga vamos a tomar el valor de las variables numeroMaximo
    y numeroMinimo de esta manera:
        1- En el caso de la primera carga tanto numeroMaximo y numeroMinimo seran null y a posteriori el numeroIngresado
        se asignará a numeroMaximo
        2- En el caso de la segunda carga se preguntara por si numeroMinimo es null y luego se comparará numeroMaximo con
        numeroIngresado
        3- Posteriormente el programa seguira cargando los numeros normalmente

    */
    respuesta = 'si';
    while (respuesta == "si") {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);

        if (numeroMaximo == null) {
            numeroMaximo = numeroIngresado;
        } else if (numeroMinimo == null) {
            if (numeroIngresado > numeroMaximo) {
                numeroMinimo = numeroMaximo;
                numeroMaximo = numeroIngresado;
            } else {
                numeroMinimo = numeroIngresado;
            }
        } else {
            if (numeroIngresado > numeroMaximo) {
                numeroMaximo = numeroIngresado;
            } else if (numeroIngresado < numeroMinimo) {
                numeroMinimo = numeroIngresado;

            }
        }

        respuesta = prompt("desea continuar?");
    }



    txtIdMaximo.value = numeroMaximo;
    txtIdMinimo.value = numeroMinimo;
} //FIN DE LA FUNCIÓN