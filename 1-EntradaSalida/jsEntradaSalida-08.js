/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {

    //Variables

    var dividendo;
    var divisor;
    var resto;

    //Inicializacion de dividendo y divisor con el valor de los ID

    dividendo = txtIdNumeroDividendo.value;
    divisor = txtIdNumeroDivisor.value;

    // Aplicamos la funcion parseInt a diviendo y divisor

    dividendo = parseInt(dividendo);

    divisor = parseInt(divisor);


    // Realizamos la operacion de resto

    resto = dividendo % divisor;

    // Mostramos el resultado en pantalla

    alert("El resto es: " + resto);

}