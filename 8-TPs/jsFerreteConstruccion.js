/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;

	largo=parseFloat(document.getElementById("Largo").value);
	ancho=parseFloat(document.getElementById("Ancho").value);

	var perimetro=(largo*2)+(ancho*2);
	var ConAlambres = perimetro*3;

	alert(ConAlambres);


}
function Circulo () 
{
	var radio;

	radio=parseFloat(document.getElementById("Radio").value);
	

	var perimetro=(radio*3)
	

	alert(perimetro);


}
function Materiales () 
{
	/*

	SI     PASA ESTO
	if    (sdlkdsfnl == jkdsfjdksf)
	{
	
	LO QUE OCURRA DENTRO DE LOS CORCHETES SE VA A CUMPLIR

	}
	SINO
	else
	{
	PASA ESTO
	}

	*/

	var largo;
	var ancho;
	var perimetro;
	var cemento;
	var cal;

	largo=parseFloat(document.getElementById("Largo").value);
	ancho=parseFloat(document.getElementById("Ancho").value);

	perimetro=(largo*2) + (ancho*2);

	cemento=(perimetro*3);

	cal=(perimetro*2);

	alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.")

}