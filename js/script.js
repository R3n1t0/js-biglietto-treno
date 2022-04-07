
const numeroKilometri = prompt("Quanti kilometri deve percorrere?" );

if(isNaN(numeroKilometri)){
  alert('Inserire un numero')
}


const etaPassegero = prompt("Quanti anni ha?");

if(isNaN(etaPassegero)){
  alert('Inserire un numero')
}




let prezzoBiglietto = (0.21 * numeroKilometri);


if (etaPassegero > 65){

  prezzoBiglietto *= .6;
  
}else if (etaPassegero < 18){

  prezzoBiglietto *= .4; 

}

prezzoBiglietto = prezzoBiglietto.toFixed(2) + " €"


document.getElementById("prezzo-biglietto").innerHTML = prezzoBiglietto;