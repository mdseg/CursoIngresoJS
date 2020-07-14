/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    //Declaracion de variables

    var sueldoInicial;
    var aumento;
    var sueldoFinal;

    // Iniciacion de variables

    sueldoInicial = txtIdSueldo.value;
    aumento = 0.10;

    // Aplicamos parseInt a sueldoInicial

    sueldoInicial = parseInt(sueldoInicial);

    // Calculamos el sueldoFinal sumando el valor de la variable aumento * sueldoInicial

    sueldoFinal = sueldoInicial + sueldoInicial * aumento;

    // Mostramos el resultado en pantalla

    txtIdResultado.value = sueldoFinal;

}