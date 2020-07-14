function mostrar() {
    // Declaramos variables

    var edad;
    var estadoCivilPersona;

    // Inicializar las variables

    edad = txtIdEdad.value;
    estadoCivilPersona = estadoCivil.value;

    // Método parseInt

    edad = parseInt(edad);

    // Estructura Condicional

    if (edad < 18 && !(estadoCivilPersona == "Soltero")) {
        alert("Es usted muy joven para no estar soltero");
    }



}