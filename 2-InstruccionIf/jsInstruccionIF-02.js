function mostrar() {
    //Declaramos las variables
    var edad;

    // Inicializamos edad con el valor de txtIdEdad

    var edad = txtIdEdad.value;

    // Aplicamos metodo parseInt a edad

    edad = parseInt(edad);

    // Aplicamos estructuras condicionales

    if (edad >= 18) {

        alert("La persona es mayor de edad");
    }



}