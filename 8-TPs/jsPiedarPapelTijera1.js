/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
alert ( eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1)
	{
		alert (" empató");

	}

	else if (eleccionMaquina==2)
	{
		alert ("perdiste");
	}

	else 
	{
		alert("ganaste");
	}
	document.location.href = document.location.href;

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}
//FIN DE LA FUNCIÓN