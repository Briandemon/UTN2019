function mostrar()
{



  var contador=0;
	var acumulador=0;
	var respuesta="si";

while (respuesta == "si"){

	numero = parseInt(prompt("Ingrese un numero"));

	respuesta = prompt("Desea continuar?:  ");

acumulador = acumulador + numero;

		contador = contador + 1;

}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
