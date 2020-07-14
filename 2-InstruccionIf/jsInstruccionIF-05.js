function mostrar() {
    // Declaramos variables
    var edad;


    // Inicializamos variable con el valor de 

    edad = txtIdEdad.value;

    // Aplicamos parseInt a edad
    edad = parseInt(edad);

    // Ejecutamos los condicionales

    if (edad < 13) {
        alert("La persona es un niño");
    } else if (edad >= 18) {
        alert("La persona es un adulto");
    }


}