/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
    var contador;
    var respuesta;
    var sumaPositivos;
    var multiplicacionNegativos;
    var numeroIngresado;
    contador = 0;
    sumaPositivos = 0;
    multiplicacionNegativos = 1;
    respuesta = 'si';

    while (respuesta == 'si') {
        numeroIngresado = prompt("Ingrese un numero");
        if (numeroIngresado === null) {
            return; // Permite salir al usuario si presiona cancel
        }
        numeroIngresado = parseInt(numeroIngresado);

        if (numeroIngresado >= 0) {
            sumaPositivos += numeroIngresado;
        } else {
            multiplicacionNegativos *= numeroIngresado;
        }
        contador++;

        respuesta = prompt("¿Desea continuar? Escriba 'si' para agregar un nuevo numero");
    }

    txtIdSuma.value = sumaPositivos;

    txtIdProducto.value = multiplicacionNegativos;

} //FIN DE LA FUNCIÓN