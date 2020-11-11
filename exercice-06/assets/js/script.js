let firstNumber = Math.round( Math.random() * 9 + 1 );
let secondNumber = Math.round( Math.random() * 9 + 1 );
// firstNumber = 10;
// secondNumber = 2;
console.log( firstNumber + " " + secondNumber );

while ( firstNumber / secondNumber > 1 ) {
    console.log( firstNumber / secondNumber );
    firstNumber = firstNumber / secondNumber;
}
