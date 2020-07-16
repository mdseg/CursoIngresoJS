/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    var valorCentigrados;
    var valorFarenheit;

    // Inicializacion de variables

    valorFarenheit = txtIdTemperatura.value;

    //ParseInt

    valorFarenheit = parseInt(valorFarenheit);

    // Conversion

    valorCentigrados = (valorFarenheit - 32) / 1.8;

    // Redondeo (Opcional), para limitar los decimales a dos

    valorCentigrados = valorCentigrados.toFixed(2);

    // Mostrar resultados

    alert(`${valorFarenheit} °F equivale a ${valorCentigrados} °C`);

}

function CentigradosFahrenheit() {
    var valorCentigrados;
    var valorFarenheit;

    // Inicializacion de variables

    valorCentigrados = txtIdTemperatura.value;

    // ParseInt

    valorCentigrados = parseInt(valorCentigrados);

    // Conversion

    valorFarenheit = (valorCentigrados * 1.8) + 32;

    // Redondeo (Opcional), para limitar los decimales a dos

    valorFarenheit = valorFarenheit.toFixed(2);

    // Mostrar mensaje

    alert(`${valorCentigrados} °C equivale a ${valorFarenheit} °F`);

}