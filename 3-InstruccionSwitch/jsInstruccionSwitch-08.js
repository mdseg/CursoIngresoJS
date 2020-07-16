function mostrar() {
    var destinoIngresado;
    var mensaje;

    destinoIngresado = txtIdDestino.value;

    switch (destinoIngresado) {
        case "Bariloche":
        case "Ushuaia":
            {
                mensaje = "Hace Frio.";
                break;
            }
        case "Cataratas":
        case "Mar del plata":
            {
                mensaje = "Hace Calor.";
                break;
            }
    }

    alert(mensaje);

} //FIN DE LA FUNCIÓN