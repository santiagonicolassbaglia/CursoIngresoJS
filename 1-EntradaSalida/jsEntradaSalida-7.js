/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var suma;

		num1=parseInt(document.getElementById("numeroUno").value);
		num2=parseInt(document.getElementById("numeroDos").value);

		suma=num1+num2;

		alert("el resultado es " + suma);

}

function restar()
{
	var num1;
	var num2;
	var resta;

		num1=parseInt(document.getElementById("numeroUno").value);
		num2=parseInt(document.getElementById("numeroDos").value);

		resta=num1-num2;

		alert("el resultado es " + resta);

}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

