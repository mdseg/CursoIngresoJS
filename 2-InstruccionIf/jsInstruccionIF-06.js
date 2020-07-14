function mostrar() {
    // Declaramos variables

    var edad;
    var respuesta;

    // Inicializamos las variables

    edad = txtIdEdad.value;

    // Aplicamos parseInt

    edad = parseInt(edad);

    // Condicionales

    if (edad >= 18) {
        respuesta = "La persona es adulta";
    } else if (edad >= 13 && edad < 18) {
        respuesta = "La persona es adolescente";
    } else {
        respuesta = "La persona es un niño";
    }

    // Mostrar resultados

    alert(respuesta);



}