function mostrar() {
    //Genero el número RANDOM entre 1 y 10 
    var notaNumerica = Math.random() * (11 - 1) + 1;
    var calificacion;

    if (notaNumerica >= 9) {
        calificacion = "EXCELENTE";
    } else if (notaNumerica >= 4) {
        calificacion = "APROBÓ";
    } else {
        calificacion = "Vamos, la próxima se puede";
    }
    alert(calificacion);

}