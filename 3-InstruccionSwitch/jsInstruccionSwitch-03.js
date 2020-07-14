function mostrar() {
    //tomo el mes
    var mesDelAnio = txtIdMes.value;

    // Sentencia Switch

    switch (mesDelAnio) {
        case "Febrero":
            {
                alert("Este mes no tiene mas de 29 dias");
                break;
            }
        default:
            {
                alert("Este mes tiene 30 o 31 dias.");
            }
    }




} //FIN DE LA FUNCIÓN