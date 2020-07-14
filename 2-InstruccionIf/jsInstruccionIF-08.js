function mostrar() {
    // Declaramos variables

    var edad;
    var estadoCivilPersona;

    // Inicializar las variables

    edad = txtIdEdad.value;
    estadoCivilPersona = estadoCivil.value;

    // Método parseInt

    edad = parseInt(edad);

    // Estructura condicional

    if (!(edad < 18) && estadoCivilPersona == "Soltero") {
        alert("Es soltero y no es menor");
    }

}