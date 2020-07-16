function mostrar() {
    //tomo el mes
    var mesDelAnio = txtIdMes.value;

    switch (mesDelAnio) {
        case "Febrero":
            {
                alert("El mes tiene 28 o 29 días");
                break;
            }
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            {
                alert("El mes tiene 30 días");
                break;
            }

        default:
            {
                alert("El mes tiene 31 días");
            }
    }





} //FIN DE LA FUNCIÓN