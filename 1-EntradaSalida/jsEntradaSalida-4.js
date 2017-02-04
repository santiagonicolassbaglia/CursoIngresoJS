/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var x;
	x=prompt("ingrese datos");
	document.getElementById("elNombre").value=x;
}

