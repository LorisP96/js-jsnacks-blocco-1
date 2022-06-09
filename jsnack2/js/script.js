let userNumb = prompt('dimmi 4 cifre');

sumNumb = 0

let resultNumb;

for(let i = 0; i < userNumb.length; i++) {

    let singleNumb = parseInt(userNumb[i]);

    resultNumb = sumNumb += singleNumb;

}

alert(resultNumb);


