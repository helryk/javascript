/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/


var producto1;
var producto2;
var producto3;
var resultado;
var numproducto1;
var numproducto2;
var numproducto3;
var resultadoredondo

producto1 = prompt("Cual es el precio del producto1?");
producto2 = prompt("Cual es el precio del producto2?");
producto3 = prompt("Cual es el precio del producto3?");

numproducto1 = parseFloat(producto1);

numproducto2 = parseFloat(producto2);

numproducto3 = parseFloat(producto3);

resultado = numproducto1 + numproducto2 + numproducto3;

resultadoredondo = Number(resultado).toFixed(2);
document.write(resultadoredondo);