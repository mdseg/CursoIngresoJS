/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largoTerreno;
    var anchoTerreno;

    var perimetro;
    var cantidadAlambre;



    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;


    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);


    perimetro = (largoTerreno + anchoTerreno) * 2;
    cantidadAlambre = perimetro * 3;

    alert("La cantidad de alambre necesaria para el terreno es de : " + cantidadAlambre + " metros");


}

function Circulo() {

    var radioTerreno;
    var longitudCircunferencia;
    var cantidadAlambre;


    radioTerreno = txtIdRadio.value;

    radioTerreno = radioTerreno;
    longitudCircunferencia = 2 * radioTerreno * Math.PI;
    cantidadAlambre = longitudCircunferencia * 3;
    alert("La cantidad de alambre necesaria son " + cantidadAlambre)


}

function Materiales() {
    var largoTerreno;
    var anchoTerreno;
    var areaTerreno;
    var cantidadBolsasCemento;
    var cantidadBolsasCal;


    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;


    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    areaTerreno = largoTerreno * anchoTerreno;

    cantidadBolsasCemento = 2 * areaTerreno;
    cantidadBolsasCal = 3 * areaTerreno;

    alert(`
        La cantidad de bolsas de cemento necesarias son: ${cantidadBolsasCemento}
        La cantidad de bolsas de cal necesarias son: ${cantidadBolsasCal}`);

}