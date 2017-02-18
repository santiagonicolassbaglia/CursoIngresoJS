function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{ 
	case "Enero":
	{
		alert("que comiences bien el año!!!.");
		break;
	}

	case "Marzo":
	{
		alert("es marzo");
		break;
	}

	case "Julio":
	{
		alert("es julio");
		break;
	}

	case "Diciembre":
	{
		alert("feliz cumple santi!!.");
		break;
	}

	default:
	{
		alert("Es otro mes");
		break;
	}


}


}//FIN DE LA FUNCIÓN