/* 

*/
const numeroKilometri = prompt("Quanti kilometri deve percorrere?" );
const etaPassegero = prompt("Quanti anni ha?");

let prezzoBiglietto = (0.21 * numeroKilometri);


if (etaPassegero > 65){

  prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto/100 * 40);
  
}else if (etaPassegero < 18){

  prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto/100 * 20); 

}else{

  prezzoBiglietto = prezzoBiglietto
  
}

prezzoBiglietto = prezzoBiglietto + "0" + " €"


document.getElementById("prezzo-biglietto").innerHTML = prezzoBiglietto;