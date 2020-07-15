/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    //Declaracion de variables

    var sueldoInicial;
    var aumento;
    var sueldoConAumento;
    var sueldoAdicional;

    // Iniciacion de variables

    sueldoInicial = txtIdSueldo.value;
    aumento = 0.1;
    sueldoAdicional;
    // Aplicamos parseInt a sueldoInicial

    sueldoInicial = parseInt(sueldoInicial);
    sueldoAdicional = sueldoInicial * aumento;
    // Calculamos el sueldoConAumento sumando el valor de la variable aumento * sueldoInicial
    alert(`Aumento: ${sueldoAdicional}`);
    sueldoConAumento = sueldoInicial + sueldoAdicional;



    // Mostramos el resultado en pantalla

    txtIdResultado.value = sueldoConAumento;

}