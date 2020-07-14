/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
var num1, num2;

function sumar() {

    var suma;

    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    suma = num1 + num2;

    alert("La suma es: " + suma);
}

function restar() {

    var resta;

    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resta = num1 - num2;

    alert("La resta es: " + resta);

}

function multiplicar() {

    var multiplicacion;

    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    multiplicacion = num1 * num2;

    alert("La multiplicacion es: " + multiplicacion);

}

function dividir() {

    var division;

    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    division = num1 / num2;

    alert("La division es: " + division);

}