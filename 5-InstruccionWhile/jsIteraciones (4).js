function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

  	while((numero < 0) || (numero > 9))
  	{
  		alert("Clave incorrecta");
  		var numero = prompt("ingrese un número entre 0 y 10.");
  		
  	}

  	alert("Numero Correcto");
  	document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN