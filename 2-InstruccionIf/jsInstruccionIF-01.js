function mostrar() {
    // Declaramos variables
    var edad;

    // Inicializamos la variable con los datos de txtIdEdad

    edad = txtIdEdad.value;

    // Aplicamos el metodo parseInt para obtener un valor entero para edad

    edad = parseInt(edad);

    // Tomamos una decision por medio de estructuras condicionales

    if (edad == 15) {
        alert("Niña bonita");
    }

}