function mostrar() {
    //tomo la hora
    var horaDelDia = txtIdHora.value;

    // parseInt

    horaDelDia = parseInt(horaDelDia);

    if (horaDelDia < 0 || horaDelDia >= 23) {
        alert("Ingrese una hora valida");
    } else {
        if (horaDelDia >= 7 && horaDelDia <= 11) {
            alert("Es de mañana");
        }
    }





} //FIN DE LA FUNCIÓN