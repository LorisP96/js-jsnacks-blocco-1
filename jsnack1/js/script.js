const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < numbers.length; i++) {

    let childNumb = numbers[i];
    console.log(childNumb);

    if (childNumb %2 === 0) {

        document.getElementById('pari').innerHTML += childNumb + " ";

    } else {
        document.getElementById('dispari').innerHTML += childNumb + " ";
    }
}


