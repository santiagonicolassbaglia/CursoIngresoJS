/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var suma;

	var precio1=parseInt(document.getElementById("PrecioUno").value);
	var precio2=parseInt(document.getElementById("PrecioDos").value);
	var precio3=parseInt(document.getElementById("PrecioTres").value);

	suma=precio1+precio2+precio3;

	alert("el resultado es " + suma);

}
function Promedio () 
{
	
	var promedio;

	var precio1=parseInt(document.getElementById("PrecioUno").value);
	var precio2=parseInt(document.getElementById("PrecioDos").value);
	var precio3=parseInt(document.getElementById("PrecioTres").value);

	promedio=(precio1+precio2+precio3)/3;

	alert("el resultado es " + promedio);


}
function PrecioFinal () 
{
	var pFinal;
	var iva;

	var precio1=parseInt(document.getElementById("PrecioUno").value);
	var precio2=parseInt(document.getElementById("PrecioDos").value);
	var precio3=parseInt(document.getElementById("PrecioTres").value);

	iva=(precio1+precio2+precio3)*0.21;
	pFinal=(precio1+precio2+precio3)+iva;

	alert("el resultado es " + pFinal);
}