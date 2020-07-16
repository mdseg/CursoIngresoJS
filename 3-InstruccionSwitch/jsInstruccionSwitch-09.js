function mostrar() {
    var estacionIngresada;
    var destino;
    var modificacionPrecio;
    const precioBase = 15000;
    var precioFinal;

    estacionIngresada = txtIdEstacion.value;
    destino = txtIdDestino.value;

    switch (estacionIngresada) {
        case "Invierno":
            {
                switch (destino) {
                    case "Bariloche":
                        {
                            modificacionPrecio = 1.2;
                            break;
                        }
                    case "Cataratas":
                    case "Cordoba":
                        {
                            modificacionPrecio = 0.9;
                            break;
                        }
                    case "Mar del plata":
                        {
                            modificacionPrecio = 0.8;
                            break;
                        }
                }
                break;
            }
        case "Verano":
            {
                switch (destino) {
                    case "Bariloche":
                        {
                            modificacionPrecio = 0.8;
                            break;
                        }
                    case "Cataratas":
                    case "Cordoba":
                        {
                            modificacionPrecio = 1.1;
                            break;
                        }
                    case "Mar del plata":
                        {
                            modificacionPrecio = 1.2;
                            break;
                        }
                }
                break;
            }
        case "Otoño":
        case "Primavera":
            {
                switch (destino) {
                    case "Bariloche":
                    case "Mar del plata":
                    case "Cataratas":
                        {
                            modificacionPrecio = 1.1;
                            break;
                        }
                    case "Cordoba":
                        {
                            modificacionPrecio = 1; //En este unico caso no se aplica ningun descuento
                            break;
                        }

                }
                break;
            }

    }

    // Calculo final

    precioFinal = precioBase * modificacionPrecio;

    // Mostrar mensaje en pantalla

    alert(`El monto final a abonar es: $${precioFinal}.`)


} //FIN DE LA FUNCIÓN