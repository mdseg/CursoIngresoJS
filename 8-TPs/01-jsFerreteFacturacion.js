/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var precioProductoUno;
    var precioProductoDos;
    var precioProductoTres;
    var sumaPrecioProductos;

    precioProductoUno = txtIdPrecioUno.value;
    precioProductoDos = txtIdPrecioDos.value;
    precioProductoTres = txtIdPrecioTres.value;

    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);

    sumaPrecioProductos = precioProductoUno + precioProductoDos + precioProductoTres;

    alert("El resultado de la suma es: " + sumaPrecioProductos);
}

function Promedio() {
    var precioProductoUno;
    var precioProductoDos;
    var precioProductoTres;
    var promedio;

    precioProductoUno = txtIdPrecioUno.value;
    precioProductoDos = txtIdPrecioDos.value;
    precioProductoTres = txtIdPrecioTres.value;

    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);

    promedio = (precioProductoUno + precioProductoDos + precioProductoTres) / 3;

    alert("El precio promedio de los productos es: " + promedio);
}

function PrecioFinal() {
    var precioProductoUno;
    var precioProductoDos;
    var precioProductoTres;
    var sumaPrecioProductosConIva;

    precioProductoUno = txtIdPrecioUno.value;
    precioProductoDos = txtIdPrecioDos.value;
    precioProductoTres = txtIdPrecioTres.value;

    precioProductoUno = parseInt(precioProductoUno);
    precioProductoDos = parseInt(precioProductoDos);
    precioProductoTres = parseInt(precioProductoTres);

    sumaPrecioProductosConIva = (precioProductoUno + precioProductoDos + precioProductoTres) * 1.21;

    alert("El precio total de los procutos + IVA es: " + sumaPrecioProductosConIva);

}