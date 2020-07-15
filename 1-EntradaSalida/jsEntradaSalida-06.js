/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var numeroUno;
    var numeroDos;
    var suma;

    //numeroUno = parseInt(txtIdNumeroUno.value);
    //numeroDos = parseInt(txtIdNumeroDos.value);

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos
    alert("El resultado de la suma es: " + suma);
}