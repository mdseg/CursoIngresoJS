function mostrar() {
    // Declaramos las variables
    var edad;


    // Inicializamos edad

    edad = txtIdEdad.value;

    // parseInt

    edad = parseInt(edad);

    // Consultamos si la edad esta entre 13 y 17 años

    if (edad > 12 && edad < 18) {
        alert("La persona es adolescente");
    }




}