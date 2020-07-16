function mostrar() {
    var estacionIngresada;
    var destino;
    var disponibilidadViaje;

    estacionIngresada = txtIdEstacion.value;
    destino = txtIdDestino.value;

    switch (estacionIngresada) {
        case "Otoño":
            {
                disponibilidadViaje = true;
                break;
            }
        case "Invierno":
            {
                if (destino == "Bariloche") {
                    disponibilidadViaje = true;
                } else {
                    disponibilidadViaje = false;
                }
                break;
            }
        case "Primavera":
            {
                if (destino == "Bariloche") {
                    disponibilidadViaje = false;
                } else {
                    disponibilidadViaje = true;
                }
                break;
            }
        case "Verano":
            {
                if (destino == "Mar del plata" || destino == "Cataratas") {
                    disponibilidadViaje = true;
                } else {
                    disponibilidadViaje = false;
                }
                break;
            }
    }

    if (disponibilidadViaje) {
        alert("Se viaja");
    } else {
        alert("No se viaja");
    }

} //FIN DE LA FUNCIÓN