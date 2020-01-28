/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/


function eurosAyens (eur){
	return (eur * 122.49);
}

function yensAeuros (yens){
	return (yens / 122.49);
}


document.write('<h1>Traspasador to guapo</h1>');

var producto;
producto = prompt("Que producto quieres comprar?");

var respuesta = prompt("Cuanto cuesta ese producto?");
var decimal = parseFloat(respuesta);

var moneda;
moneda = prompt("Quieres usar euros o yens?");


	if(moneda = "euros"){

		var dinero = eurosAyens (decimal);

	document.write( producto + "        " + decimal + "    €    "  + dinero +  " ¥ " )

	}
	
else if(moneda = "yens"){

		var pasta = yensAeuros (decimal);

	document.write( producto + "        " + decimal + "   ¥    "  + pasta +  " € " )

	}
	





















/*


function e2y (monedas){

}

var precio;
precio = prompt("cantas yens cuesta?");

var numero;
numero = parseInt(precio);
alert(precio)

var euros;
euros = (precio/122.49);
alert(euros);

*/