// do una variabile per poi sommarci i valori
let numbers = 0;

// creo una variabile per il totale della somma
let sumNumbers;

for(i = 1; i <= 10; i++) {

   // chiedo 10 volte le cifre da sommare
   let promptVal = parseInt(prompt('dimmi un numero (10 volte)'));
   
   // eseguo la somma
   sumNumbers = numbers += promptVal;
   console.log(sumNumbers);
}

// mostro il risultato all'utente
alert(`il risultato è ${sumNumbers}`);
