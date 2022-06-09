// creo array vuoto
let dispariNum = [];

// do una variabile
let promptVal;

for(i = 1; i <= 6; i++) {

    // chiedo per 6 volte
    promptVal = parseInt(prompt('dimmi un numero (6 volte)'));

    // se è dispari lo inserisco nell'array
    if (promptVal % 2 === 1) {
        dispariNum.push(promptVal);
    }
}

// verifico
console.log(dispariNum)

