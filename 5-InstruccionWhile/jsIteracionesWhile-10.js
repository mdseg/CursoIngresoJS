/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
    var cantidadPositivos = 0;
    var cantidadNegativos = 0;
    var cantidadCeros = 0;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var promedioPositivos = 0;
    var promedioNegativos = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var diferenciaPositivosNegativos = 0;
    var numeroIngresado = 0;
    var resto = 0;

    var respuesta

    respuesta = 'si';
    while (respuesta == 'si') {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);

        if (numeroIngresado > 0) {
            cantidadPositivos++;
            acumuladorPositivos += numeroIngresado;

        } else if (numeroIngresado < 0) {
            cantidadNegativos++;
            acumuladorNegativos += numeroIngresado;
        } else {
            cantidadCeros++;

        }
        //Evaluar paridad
        resto = numeroIngresado % 2;
        if (resto != 0) {
            cantidadNumerosImpares++;

        } else {
            cantidadNumerosPares++;
        }

        respuesta = prompt("¿Desea continuar? De ser así responda 'si'");


    }

    //Calculos Finales

    promedioPositivos = acumuladorPositivos / cantidadPositivos;
    promedioNegativos = acumuladorNegativos / cantidadNegativos;
    diferenciaPositivosNegativos = cantidadPositivos - cantidadNegativos;

    alert(
        `
		cantidad Positivos = ${cantidadPositivos}
		cantidad Negativos = ${cantidadNegativos}
		cantidad Ceros = ${cantidadCeros}
		cantidad Numeros pares = ${cantidadNumerosPares}
		cantidad Numeros Impares = ${cantidadNumerosImpares}
		Promedio positivos = ${promedioPositivos}
		Promedio negativos = ${promedioNegativos}
		`)
} //FIN DE LA FUNCIÓN