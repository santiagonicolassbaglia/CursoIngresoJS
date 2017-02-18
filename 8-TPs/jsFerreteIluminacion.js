/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantLamparas;
    var marca;
    var precio;
    var descuento=0;

    cantLamparas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;

    //A
    precio=35*cantLamparas;

    if(cantLamparas >= 6)
    {  
    	descuento=precio/2;
    	alert("Su descuento es del 50%");
    }

    //B

    if(marca=="ArgentinaLuz" && cantLamparas==5)
	{
		descuento=precio*0.40;
		alert("Su descuento es del 40%");
	}

	//C
{
	if((marca=="ArgentinaLuz" || marca=="FelipeLamparas") && cantLamparas==4)

	{
		descuento=precio*0.25;
		alert("Su descuento es del 25%"); 
    }

   	else if (cantLamparas==4 && (marca!="ArgentinaLuz" || marca != "FelipeLamparas"))
   	{
   		descuento=precio*0.20;
   		alert("Su descuento es del 20%");
   	}

 }
    document.getElementById("precioDescuento").value=descuento;
    precio=precio-descuento; //precio -=descuento; dos formas de escribirlo

    alert("el precio a pagar es: " + precio);

    

}
