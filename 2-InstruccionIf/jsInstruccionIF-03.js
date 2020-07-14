function mostrar() {
    // Declaramos variables

    var edad;
    var respuesta;

    // Inicializamos la variable edad

    edad = txtIdEdad.value;

    // Aplicamos metodo parseInt

    edad = parseInt(edad);

    // Realizamos la toma de decisión

    if (edad >= 18) {
        respuesta = "La persona es mayor de edad";
    } else {
        respuesta = "La persona es menor de edad";

    }

    // Mostramos el resultado en pantalla

    alert(respuesta);

}