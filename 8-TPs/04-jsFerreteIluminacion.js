/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    // Declaracion de variables

    const precioLampara = 35;
    var cantidadLamparasPedido;
    var marcaLampara;
    var montoPedidoSinDescuento;
    var montoFinal;
    var montoImpuesto;

    // Inicializacion de Variables

    cantidadLamparasPedido = txtIdCantidad.value;
    marcaLampara = Marca.value;

    // ParseInt

    cantidadLamparasPedido = parseInt(cantidadLamparasPedido);

    // Calculamos el monto total del pedido previamente a pasar a ver los descuentos particulares

    montoPedidoSinDescuento = cantidadLamparasPedido * precioLampara;

    // Calculo 

    if (cantidadLamparasPedido >= 6) {

        montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.5);

    } else if (cantidadLamparasPedido == 5) {
        if (marcaLampara == "ArgentinaLuz") {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.4);
        } else {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.3);

        }
    } else if (cantidadLamparasPedido == 4) {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.25);
        } else {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.20);

        }
    } else if (cantidadLamparasPedido == 3) {
        if (marcaLampara == "ArgentinaLuz") {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.15);
        } else if (marcaLampara == "FelipeLamparas") {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.10);
        } else {
            montoFinal = montoPedidoSinDescuento - (montoPedidoSinDescuento * 0.5);
        }
    } else {
        montoFinal = montoPedidoSinDescuento;
    }

    // Averiguamos si corresponde el 10% de IIBB

    if (montoFinal > 120) {
        montoImpuesto = montoFinal * 0.10;
        montoFinal = montoFinal + montoImpuesto;
        alert(`IIBB Usted pago $${montoFinal}, siendo $${montoImpuesto} el impuesto que se pago`);
    } else {
        alert(`Usted pago $${montoFinal}`);
    }

}