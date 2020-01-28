/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/
function TipoMedalla(posicion){
	if(posicion == 1)
	{medalla = "Medalla de ouro";}
	else if (posicion == 2)
	{medalla = "Medalla de prata";}
	else if (posicion == 3)
	{medalla = "Medalla de bronce";}
	else { medalla = "Mala sorte"};

}

var posicion = prompt("Como has quedado?");
posicion = parseFloat(posicion);

var funcion = TipoMedalla(posicion);
document.write(posicion + "º");
document.write(medalla);