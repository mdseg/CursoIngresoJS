/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var num1;
    var num2;
    var suma;

    num1 = parseInt(txtIdNumeroUno.value);
    num2 = parseInt(txtIdNumeroDos.value);
    /*
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    */
    suma = num1 + num2
    alert("El resultado de la suma es: " + suma);
}