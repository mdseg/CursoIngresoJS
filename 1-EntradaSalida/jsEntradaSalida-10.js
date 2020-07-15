/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    // Declaracion de variables
    var importeInicial;
    var descuento;
    var importeConDescuento;

    // Inicializamos las variables

    importeInicial = txtIdImporte.value;


    // Apliquemos el metodo parseInt

    importeInicial = parseInt(importeInicial);

    // Calculemos el descuento

    descuento = importeInicial * 0.25;

    // Realizamos la operacion para obtener el importe con el descuento

    importeConDescuento = importeInicial - descuento;

    alert(`Descuento: ${descuento}`);

    // Mostramos el resultado en el objeto con Id txtIdResultado

    txtIdResultado.value = importeConDescuento;
}